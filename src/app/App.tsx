import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import routes from 'app/routes';
import Partners from 'app/sections/Partners/Partners';
import News from 'app/sections/News/News';
import { darkTheme } from 'shared/styles/theme';

import { Main } from './pages/Main/Main';
import { DcaPool } from './pages/DcaPool/DcaPool';

export function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path={routes.delphi.getRoutePath()} component={DcaPool} />
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
      <Redirect to="/" />
    </Switch>
  );
}
