import configureDeps from './configureDeps';

import { configureJss } from 'core/configureJss';
import { IAppData } from 'shared/types/app';

function configureApp(data?: IAppData): IAppData {
  /* Prepare main app elements */

  if (data) {
    return data;
  }

  const dependencies = configureDeps();
  const jssDeps = configureJss();

  return { jssDeps, deps: dependencies };
}

export default configureApp;
