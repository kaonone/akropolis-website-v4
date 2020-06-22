import { ReactElement } from 'react';
import { RouteProps } from 'react-router';
import { Store, Reducer, ActionCreator, Action } from 'redux';
import { SagaIterator } from 'redux-saga';
import { Jss } from 'jss';

export abstract class IModule {
  public getRoutes?(): ReactElement<RouteProps> | Array<ReactElement<RouteProps>>;
  public getReduxEntry?(): IReduxEntry;
}

export interface IAppData {
  store: Store<IAppReduxState>;
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

export interface IReduxEntry {
  reducers?: { [key in keyof IAppReduxState]?: Reducer<IAppReduxState[key]> };
  sagas?: Array<(deps: IDependencies) => () => SagaIterator>;
}

export interface IFeatureEntry<
  C extends IDictionary<React.ReactType<any>, keyof C> | void,
  A extends IDictionary<ActionCreator<Action>, keyof A> | void,
  S extends IDictionary<(state: any, ...args: any[]) => any, keyof S> | void
> extends IReduxEntry {
  actions?: A;
  selectors?: S;
  containers?: C;
}

// tslint:disable-next-line:no-empty-interface
export interface IAppReduxState {
  // services
  // features
}

export type RootSaga = (deps: IDependencies) => () => SagaIterator;

export type Uid = number;

export interface IAssets {
  javascript: string[];
  styles: string[];
  favicons: CheerioElement[];
}
