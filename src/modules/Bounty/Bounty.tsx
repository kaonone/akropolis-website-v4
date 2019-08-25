import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IModule } from 'shared/types/app';
import { Layout, Preview, RegisterUser, CheckUserAddress } from './view';
import routes from 'modules/routes';

// tslint:disable: jsx-wrap-multiline
const BountyModule: IModule = {
  getRoutes() {
    return (
      <Route
        key="bounty"
        path={routes.bounty.getRoutePath()}
      >
        {() => (
          <Layout>
            <Switch>
              <Route
                exact
                path={routes.bounty.getRoutePath()}
                component={Preview}
              />,
              <Route
                exact
                path={routes.bounty.registration.getRoutePath()}
                component={RegisterUser}
              />,
              <Route
                exact
                path={routes.bounty.check.getRoutePath()}
                component={CheckUserAddress}
              />,
            </Switch>
          </Layout>
        )}
      </Route>
    );
  },
};

export default BountyModule;
