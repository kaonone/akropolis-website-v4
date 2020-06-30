import { ReactElement } from 'react';
import { RouteProps } from 'react-router';
import { Jss } from 'jss';

export abstract class IModule {
  public getRoutes?(): ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
}

export interface IAppData {
  jssDeps: IJssDependencies;
  deps: IDependencies;
}

export interface IJssDependencies {
  jss: Jss;
}

// tslint:disable-next-line: no-empty-interface
export interface IDependencies {}

export type IDictionary<T, S extends keyof any = string> = {
  [key in S]: T;
};

export type Uid = number;

export interface IAssets {
  javascript: string[];
  styles: string[];
  favicons: CheerioElement[];
}
