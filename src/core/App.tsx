import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory, Location } from 'history';
import { StaticRouter, Router } from 'react-router-dom';
import animateScroll from 'react-scroll/modules/mixins/animate-scroll';
import 'normalize.css';
import 'shared/styles/fonts/index.scss';

import { hot } from 'react-hot-loader/root';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { I18nProvider } from 'services/i18n';
import { IAppData, IModule, IJssDependencies, IDependencies } from 'shared/types/app';
import { BaseStyles, JssProvider, SheetsRegistry } from 'shared/styles';
import { getTheme } from 'shared/styles/theme';

import createRoutes from './routes';
import { DepsContext } from './DepsReactContext';

const browserHistory = createBrowserHistory();

browserHistory.listen(handleScrollToAnchor);

function handleScrollToAnchor(location: Location<any>) {
  setTimeout(() => {
    if (location.hash) { // scroll to anchor
      const element = document.getElementById(location.hash.slice(1));
      const offset = element && element.getBoundingClientRect().top;
      offset && animateScroll.scrollMore(offset);
    } else {
      animateScroll.scrollToTop();
    }
  }, 0);
}

interface IAppProps {
  jssDeps: IJssDependencies;
  disableStylesGeneration?: boolean;
}

function ClientApp({ modules, store, jssDeps, disableStylesGeneration, deps }: IAppData & IAppProps) {
  useEffect(() => {
    handleScrollToAnchor(browserHistory.location);
  }, []);

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {renderSharedPart({ modules, jssDeps, disableStylesGeneration, deps })}
      </Router>
    </Provider>
  );
}

export const App = hot(ClientApp);

interface IServerAppProps {
  jssDeps: IJssDependencies;
  registry?: SheetsRegistry;
  disableStylesGeneration?: boolean;
  deps: IDependencies;

}

export function ServerApp(props: IAppData & IServerAppProps & StaticRouter['props']) {
  const { modules, store, registry, jssDeps, disableStylesGeneration, deps, ...routerProps } = props;
  return (
    <Provider store={store}>
      <StaticRouter {...routerProps}>
        {renderSharedPart({ modules, jssDeps, disableStylesGeneration, registry, deps })}
      </StaticRouter>
    </Provider>
  );
}

const theme = getTheme();

interface ISharedProps {
  modules: IModule[];
  jssDeps: IJssDependencies;
  deps: IDependencies;
  disableStylesGeneration?: boolean;
  registry?: SheetsRegistry;
}

function renderSharedPart(
  { modules, jssDeps, disableStylesGeneration, registry, deps }: ISharedProps,
) {
  const { generateClassName, jss } = jssDeps;

  return (
    <JssProvider
      jss={jss}
      registry={registry}
      generateClassName={generateClassName}
      disableStylesGeneration={disableStylesGeneration}
    >
      <MuiThemeProvider disableStylesGeneration={disableStylesGeneration} theme={theme}>
        <DepsContext.Provider value={deps}>
          <I18nProvider>
            <BaseStyles>
              {createRoutes(modules)}
            </BaseStyles>
          </I18nProvider>
        </DepsContext.Provider>
      </MuiThemeProvider>
    </JssProvider>
  );
}
