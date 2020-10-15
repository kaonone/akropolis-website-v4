import * as appInfo from '../../package.json';

export type Mode = 'sandbox' | 'rinkeby' | 'kovan' | 'mainnet' | 'pre-mainnet';

export default function getEnvParams() {
  const isProduction = process.env.NODE_ENV === 'production';
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isWatchMode = process.env.WATCH_MODE === 'true';
  const isStaging = process.env.IS_STAGING === 'true';
  const withAnalyze = process.env.BUNDLE_ANALYZE_MODE === 'true';
  const withoutTypeChecking = process.env.WITHOUT_TYPES_CHECKING === 'true';
  const forGHPages = process.env.FOR_GH_PAGES === 'true';
  const mode: Mode = (process.env.MODE as Mode | undefined) || 'rinkeby';

  const chunkName = isProduction ? 'id' : 'name';
  const chunkHash = isWatchMode && !isProduction ? 'hash' : 'chunkhash';
  const withHot = isWatchMode && isDevelopment;
  const appVersion = appInfo.version;

  const tokenSwapApiUrl = 'https://swap.akropolis.io/1.0';
  const sumsubAccessTokenUrl = 'https://sumsub-swap.akropolis.io';

  return {
    isProduction,
    isDevelopment,
    isWatchMode,
    withAnalyze,
    withoutTypeChecking,
    chunkName,
    chunkHash,
    withHot,
    appVersion,
    forGHPages,
    isStaging,
    tokenSwapApiUrl,
    sumsubAccessTokenUrl,
    mode,
  };
}
