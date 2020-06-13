import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import routes from 'modules/routes';
import { Main } from './pages/Main/Main';

import { Partners, News } from 'modules/sections';

export function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact key="ForWikiPartners" path={routes.forWiki.partners.getRoutePath()}>
        <Partners withTitle={false} />
      </Route>
      <Route exact key="ForWikiNews" path={routes.forWiki.news.getRoutePath()}>
        <News withTitle={false} withPagination={false} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
