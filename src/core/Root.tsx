import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory, Location } from 'history';
import { Router } from 'react-router-dom';
import animateScroll from 'react-scroll/modules/mixins/animate-scroll';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'normalize.css';
import 'shared/styles/fonts/index.scss';

import { hot } from 'react-hot-loader/root';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { I18nProvider } from 'services/i18n';
import { IAppData, IJssDependencies } from 'shared/types/app';
import { getTheme } from 'shared/styles/theme';

import { DepsContext } from './DepsReactContext';
import { App } from 'app/App';

const browserHistory = createBrowserHistory();

browserHistory.listen(handleScrollToAnchor);

function handleScrollToAnchor(location: Location<any>) {
  setTimeout(() => {
    if (location.hash) {
      // scroll to anchor
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
}

const theme = getTheme();

function ClientRoot({ store, jssDeps, deps }: IAppData & IAppProps) {
  useEffect(() => {
    handleScrollToAnchor(browserHistory.location);
  }, []);

  const { jss } = jssDeps;

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <StylesProvider jss={jss}>
          <MuiThemeProvider theme={theme}>
            <DepsContext.Provider value={deps}>
              <I18nProvider>
                <CssBaseline />
                <App />
              </I18nProvider>
            </DepsContext.Provider>
          </MuiThemeProvider>
        </StylesProvider>
      </Router>
    </Provider>
  );
}

export const Root = hot(ClientRoot);
