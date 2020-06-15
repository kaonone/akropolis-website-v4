import * as React from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { IModule } from 'shared/types/app';
import routes from 'modules/routes';
import { lightTheme } from 'shared/styles/theme';
import { Partners, News } from '../sections';

const ForWikiModule: IModule = {
  getRoutes() {
    return [(
      <MuiThemeProvider theme={lightTheme}>
        <Route exact key="ForWikiPartners" path={routes.forWiki.partners.getRoutePath()} >
          <Partners withTitle={false} />
        </Route>
      </MuiThemeProvider>
    ), (
      <MuiThemeProvider theme={lightTheme}>
        <Route exact key="ForWikiNews" path={routes.forWiki.news.getRoutePath()} >
          <News withTitle={false} withPagination={false} />
        </Route>
      </MuiThemeProvider>
    )];
  },
};

export default ForWikiModule;
