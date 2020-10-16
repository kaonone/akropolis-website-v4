import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDeps } from 'core/DepsReactContext';

import routes from 'app/routes';
import Partners from 'app/sections/Partners/Partners';
import News from 'app/sections/News/News';
import { darkTheme } from 'shared/styles/theme';

import { AuthProvider } from 'services/auth';
import { ApiContext } from 'services/api';

import { Main, TokenSwap, VestedAkroExchange } from './pages';

export function App() {
  const deps = useDeps();

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact key="ForWikiPartners" path={routes.forWiki.partners.getRoutePath()}>
        <MuiThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Partners withTitle={false} />
        </MuiThemeProvider>
      </Route>
      <Route exact key="ForWikiNews" path={routes.forWiki.news.getRoutePath()}>
        <MuiThemeProvider theme={darkTheme}>
          <CssBaseline />
          <News withTitle={false} withPagination={false} />
        </MuiThemeProvider>
      </Route>
      <Route path={routes.tokenswap.getRoutePath()}>
        <MuiThemeProvider theme={darkTheme}>
          <CssBaseline />
          <TokenSwap />
        </MuiThemeProvider>
      </Route>
      <Route path={routes.vAkro.getRoutePath()}>
        <MuiThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ApiContext.Provider value={deps.api}>
            <AuthProvider web3Manager={deps.api.web3Manager} disconnectRedirectPath={routes.vAkro.getRedirectPath()}>
              <VestedAkroExchange />
            </AuthProvider>
          </ApiContext.Provider>
        </MuiThemeProvider>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
