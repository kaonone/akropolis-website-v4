import { Jss } from 'jss';

export interface IAppData {
  jssDeps: IJssDependencies;
  deps: IDependencies;
}

export interface IJssDependencies {
  jss: Jss;
}

// tslint:disable-next-line: no-empty-interface
export interface IDependencies {}
