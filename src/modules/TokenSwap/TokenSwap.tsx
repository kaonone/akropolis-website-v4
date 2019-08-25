import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import { Layout } from './view';

// tslint:disable: jsx-wrap-multiline
const TokenSwapModule: IModule = {
  getRoutes() {
    return (
      <Route
        key="token-swap"
        path={routes.tokenswap.getRoutePath()}
        component={Layout}
      />
    );
  },
};

export default TokenSwapModule;
