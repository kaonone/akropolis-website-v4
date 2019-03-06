import * as React from 'react';
import { Route } from 'react-router-dom';

import { IModule } from 'shared/types/app';
import Home from './view/Home/Home';

const HomeModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="home"
        path="/"
        component={Home}
      />
    );
  },
};

export default HomeModule;
