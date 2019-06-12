import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import Swap from './view/Swap/Swap';

const SwapModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="swap"
        path={routes.swap.getRoutePath()}
        component={Swap}
      />
    );
  },
};

export default SwapModule;
