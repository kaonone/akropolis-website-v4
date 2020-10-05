import { Jss } from 'jss';

import Api from 'services/api/Api';

export interface IAppData {
  jssDeps: IJssDependencies;
  deps: IDependencies;
}

export interface IJssDependencies {
  jss: Jss;
}

export interface IDependencies {
  api: Api;
}
