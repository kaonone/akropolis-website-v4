import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import Bnbridge from './view/Bnbridge/Bnbridge';

const BnbridgeModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="bnbridge"
        path={routes.bnbridge.getRoutePath()}
        component={Bnbridge}
      />
    );
  },
};

export default BnbridgeModule;
