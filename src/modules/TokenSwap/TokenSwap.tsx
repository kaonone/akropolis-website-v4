import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IModule } from 'shared/types/app';
import { Layout, Preview, RegisterUser, CheckUserAddress } from './view';
import routes from 'modules/routes';

// tslint:disable: jsx-wrap-multiline
const TokenSwapModule: IModule = {
  getRoutes() {
    return (
      <Route
        key="token-swap"
        path={routes.tokenswap.getRoutePath()}
      >
        {() => (
          <Layout>
            <Switch>
              <Route
                exact
                path={routes.tokenswap.getRoutePath()}
                component={Preview}
              />,
              <Route
                exact
                path={routes.tokenswap.registration.getRoutePath()}
                component={RegisterUser}
              />,
              <Route
                exact
                path={routes.tokenswap.check.getRoutePath()}
                component={CheckUserAddress}
              />,
            </Switch>
          </Layout>
        )}
      </Route>
    );
  },
};

export default TokenSwapModule;
