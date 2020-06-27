import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import routes from 'modules/routes';
import { Partners, News } from 'modules/sections';
import { lightTheme } from 'shared/styles/theme';

import { Main } from './pages/Main/Main';
import { CreditPool } from './pages/CreditPool/CreditPool';
import { DcaPool } from './pages/DcaPool/DcaPool';

export function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path={routes['credit-pool'].getRoutePath()} component={CreditPool} />
      <Route exact path={routes['dca-pool'].getRoutePath()} component={DcaPool} />
      <Route exact key="ForWikiPartners" path={routes.forWiki.partners.getRoutePath()}>
        <MuiThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Partners withTitle={false} />
        </MuiThemeProvider>
      </Route>
      <Route exact key="ForWikiNews" path={routes.forWiki.news.getRoutePath()}>
        <MuiThemeProvider theme={lightTheme}>
          <CssBaseline />
          <News withTitle={false} withPagination={false} />
        </MuiThemeProvider>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
