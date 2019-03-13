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
import { IAppData, IModule, IJssDependencies } from 'shared/types/app';
import { BaseStyles, JssProvider, SheetsRegistry } from 'shared/styles';
import { getTheme } from 'shared/styles/theme';

import createRoutes from './routes';

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

function ClientApp({ modules, store, jssDeps, disableStylesGeneration }: IAppData & IAppProps) {
  useEffect(() => {
    handleScrollToAnchor(browserHistory.location);
  }, []);

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {renderSharedPart(modules, jssDeps, disableStylesGeneration)}
      </Router>
    </Provider>
  );
}

export const App = hot(ClientApp);

interface IServerAppProps {
  jssDeps: IJssDependencies;
  registry?: SheetsRegistry;
  disableStylesGeneration?: boolean;
}

export function ServerApp(props: IAppData & IServerAppProps & StaticRouter['props']) {
  const { modules, store, registry, jssDeps, disableStylesGeneration, ...routerProps } = props;
  return (
    <Provider store={store}>
      <StaticRouter {...routerProps}>
        {renderSharedPart(modules, jssDeps, disableStylesGeneration, registry)}
      </StaticRouter>
    </Provider>
  );
}

const theme = getTheme();

function renderSharedPart(
  modules: IModule[], jssDeps: IJssDependencies,
  disableStylesGeneration?: boolean,
  registry?: SheetsRegistry,
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
        <I18nProvider>
          <BaseStyles>
            {createRoutes(modules)}
          </BaseStyles>
        </I18nProvider>
      </MuiThemeProvider>
    </JssProvider>
  );
}
