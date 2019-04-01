import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import threadLoaderLib from 'thread-loader';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import FileManagerWebpackPlugin from 'filemanager-webpack-plugin';
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import PrerenderSPAPlugin from 'prerender-spa-plugin';

import postcssReporter from 'postcss-reporter';
import postcssSCSS from 'postcss-scss';
import autoprefixer from 'autoprefixer';
import stylelint from 'stylelint';
import doiuse from 'doiuse';

import getEnvParams from '../src/core/getEnvParams';

export type BuildType = 'dev' | 'prod' | 'server';

const { chunkHash, withAnalyze, chunkName, withHot, isWatchMode, forGHPages, withoutTypeChecking } = getEnvParams();

const threadLoader: webpack.Loader[] = (() => {
  if (process.env.THREADED === 'true') {
    const workerPool = {
      workers: require('os').cpus().length - 1,
      poolTimeout: withHot ? Infinity : 2000,
    };
    isWatchMode && threadLoaderLib.warmup(workerPool, [
      'babel-loader',
      'ts-loader',
      'postcss-loader',
      'sass-loader',
    ]);
    return [{ loader: 'thread-loader', options: workerPool }];
  }
  return [];
})();

export const getCommonPlugins: (type: BuildType) => webpack.Plugin[] = (type) => [
  new CleanWebpackPlugin(['build', 'static'], { root: path.resolve(__dirname, '..') }),
  new MiniCssExtractPlugin({
    filename: `css/[name].[${chunkHash}].css`,
    chunkFilename: `css/[id].[${chunkHash}].css`,
  }),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'assets/index.html',
    chunksSortMode: sortChunks,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV_MODE': JSON.stringify(process.env.NODE_ENV_MODE),
    '__HOST__': JSON.stringify('http://localhost:3000'),
    '__LANG__': JSON.stringify(process.env.LANG || 'en'),
    '__CLIENT__': true,
    '__SERVER__': false,
  }),
  new CircularDependencyPlugin({
    exclude: /node_modules/,
    failOnError: true,
    cwd: process.cwd(),
  }),
  new FaviconsWebpackPlugin(path.resolve(__dirname, '..', 'src', 'assets', 'favicon.png')),
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, '..', 'build'),
    routes: ['/', '/company', '/events', 'forWiki/partners', 'forWiki/news'],
    postProcess(renderedRoute: any) {
      const styleRegExp = /<style.*?>[^<]*<\/style>/gi;
      const styles = (renderedRoute.html.match(styleRegExp) || []).join('');
      const wrappedStyles = `<div id="server-side-styles">${styles}</div>`;
      renderedRoute.html = renderedRoute.html
        .replace(styleRegExp, '')
        .replace(/<\/head>/i, `${wrappedStyles}<\/head>`);
      return renderedRoute;
    },
    renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
      injectProperty: '__PRERENDER_INJECTED__',
      inject: {
        isServer: true,
      },
    }),
  }),
  new FileManagerWebpackPlugin({
    onEnd: {
      copy: [{
        source: `src/assets/copyToRoot/**`,
        destination: `build`,
      }].concat(forGHPages ? {
        source: `build/index.html`,
        destination: `build/404.html`,
      } : []),
    },
  }),
]
  .concat(isWatchMode && !withoutTypeChecking ? (
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      async: false,
      tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
      tslint: path.resolve(__dirname, '..', 'tslint.json'),
      reportFiles: [
        '**',
        '!**/*.json',
      ],
    })) : [])
  .concat(withAnalyze ? (
    new BundleAnalyzerPlugin()
  ) : [])
  .concat(withHot && type !== 'prod' ? (
    new webpack.HotModuleReplacementPlugin()
  ) : [])
  .concat(forGHPages ? new FileManagerWebpackPlugin({
    onEnd: {
      copy: [
        {
          source: `src/assets/ghPages/**`,
          destination: `build`,
        },
      ],
    },
  }) : []);

function sortChunks(a: webpack.compilation.Chunk, b: webpack.compilation.Chunk) {
  const order = ['app', 'vendors', 'runtime'];
  return order.findIndex(
    // webpack typings for Chunk are not correct wait for type updates for webpack.compilation.Chunk
    item => (b as any).names[0].includes(item)) - order.findIndex(item => (a as any).names[0].includes(item),
    );
}

export const getCommonRules: (type: BuildType) => webpack.Rule[] = (type) => [
  {
    test: /\.tsx?$/,
    use:
      threadLoader
        .concat(withHot && type === 'dev' ? {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            cacheDirectory: true,
            plugins: [
              'react-hot-loader/babel',
              'syntax-dynamic-import',
            ],
          },
        } : [])
        .concat({
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
            logLevel: 'error',
          },
        }),
  },
  {
    test: /\.(png|jpg|pdf)$/,
    use: 'file-loader?name=assets/[hash].[ext]',
  },
  {
    test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
    use: 'file-loader?name=fonts/[hash].[ext]',
  },
  {
    test: /\.(svg)/,
    loader: 'url-loader',
    options: {
      name: 'images/[name].[ext]',
      limit: 10000,
    },
  },
];

export function getStyleRules(type: BuildType) {
  const cssLoaders: Record<BuildType, webpack.Loader[]> = {
    dev: ['style-loader', 'css-loader'],
    prod: [MiniCssExtractPlugin.loader, 'css-loader'],
    server: ['css-loader/locals'],
  };

  const scssFirstLoaders: Record<BuildType, webpack.Loader[]> = {
    dev: ['style-loader', 'css-loader?importLoaders=1'],
    prod: [MiniCssExtractPlugin.loader, 'css-loader?importLoaders=1'],
    server: ['css-loader/locals?importLoaders=1'],
  };

  return [
    {
      test: /\.css$/,
      use: cssLoaders[type],
    },
    {
      test: /\.scss$/,
      use: threadLoader.concat(scssFirstLoaders[type]).concat(commonScssLoaders),
    },
  ];
}

const commonScssLoaders: webpack.Loader[] = [
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => {
        return [
          autoprefixer({
            browsers: ['last 2 versions'],
          }),
        ];
      },
    },
  },
  'sass-loader',
  {
    loader: 'postcss-loader',
    options: {
      syntax: postcssSCSS,
      plugins: () => {
        return [
          stylelint(),
          doiuse({
            // https://github.com/browserslist/browserslist
            // to view resulting browsers list, use the command in terminal `npx browserslist "defaults, not ie > 0"`
            browsers: ['defaults', 'not op_mini all', 'not ie > 0', 'not ie_mob > 0'],
            ignore: [],
            ignoreFiles: ['**/normalize.css'],
          }),
          postcssReporter({
            clearReportedMessages: true,
            throwError: true,
          }),
        ];
      },
    },
  },
];

export const commonConfig: webpack.Configuration = {
  target: 'web',
  context: path.resolve(__dirname, '..', 'src'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '..', 'build'),
    filename: `js/[name]-[${chunkHash}].bundle.js`,
    chunkFilename: `js/[${chunkName}]-[${chunkHash}].bundle.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsConfigPathsPlugin(),
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    colors: true,
    errors: true,
    errorDetails: true,
    warnings: true,
    assets: false,
    modules: false,
    // typescript would remove the interfaces but also remove the imports of typings
    // and because of this, warnings are shown https://github.com/TypeStrong/ts-loader/issues/653
    warningsFilter: /export .* was not found in/,
  },
  devServer: {
    hot: withHot,
    contentBase: path.resolve('..', 'build'),
    host: '0.0.0.0',
    port: 8080,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    disableHostCheck: true,
    stats: {
      colors: true,
      errors: true,
      errorDetails: true,
      warnings: true,
      assets: false,
      modules: false,
      warningsFilter: /export .* was not found in/,
    },
  },
};
