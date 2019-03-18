import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import Events from './view/Events/Events';

const EventsModule: IModule = {
  getRoutes() {
    return (
      <Route
        exact
        key="events"
        path={routes.events.getRoutePath()}
        component={Events}
      />
    );
  },
};

export default EventsModule;
