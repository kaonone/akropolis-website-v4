import { Store } from 'redux';

import { IDependencies, IAppReduxState } from 'shared/types/app';

export default function configureDeps(_store: Store<IAppReduxState>): IDependencies {
  return {};
}
