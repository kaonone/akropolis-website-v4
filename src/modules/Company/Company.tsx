import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import Company from './view/Company/Company';

const CompanyModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="company"
        path={routes.company.getRoutePath()}
        component={Company}
      />
    );
  },
};

export default CompanyModule;
