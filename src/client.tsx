import 'reflect-metadata';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'core/App';
import configureApp from 'core/configureApp';
import getEnvParams from 'core/getEnvParams';
import { actions as adaptabilityActions } from 'services/adaptability';
import { IAppData } from 'shared/types/app';

const { appVersion } = getEnvParams();

const appData = configureApp();

/* Start application */
render(<App {...appData} />, appData);

/* Hot Module Replacement API */
if ((module as any).hot && process.env.NODE_ENV !== 'production') {
  (module as any).hot.accept(['./core/App', './core/configureApp'], () => {
    const nextConfigureApp: typeof configureApp = require('./core/configureApp').default;
    const NextApp: typeof App = require('./core/App').App;
    const nextAppData = nextConfigureApp(appData);
    render(<NextApp {...nextAppData} jssDeps={appData.jssDeps} />, nextAppData);
  });
}

function render(component: React.ReactElement<any>, { store }: IAppData) {
  ReactDOM.hydrate(
    component,
    document.getElementById('root'),
    () => {
      // We don't need the static css any more once we have launched our application.
      const ssStyles = document.getElementById('server-side-styles');
      if (ssStyles && ssStyles.parentNode) {
        ssStyles.parentNode.removeChild(ssStyles);
      }
      store.dispatch(adaptabilityActions.hydrated());
    },
  );
}

/* tslint:disable */
console.info(`%cApp version: ${appVersion}`, 'background: #EBF5F8; color: gray; font-size: x-medium; border-radius: 5px; padding: 5px;');
/* tslint:enable */
