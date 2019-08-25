import * as React from 'react';
import { Route } from 'react-router-dom';

import routes from 'modules/routes';
import { IModule } from 'shared/types/app';
import Quest from './view/Quest/Quest';
import Kyc from './view/Kyc/Kyc';

const QuestModule: IModule = {
  getRoutes() {
    return [(
      <Route
        exact
        key="quest"
        path={routes.quest.getRoutePath()}
        component={Quest}
      />
    ), (
      <Route
        exact
        key="kyc"
        path={routes.quest.kyc.getRoutePath()}
        component={Kyc}
      />
    )];
  },
};

export default QuestModule;
