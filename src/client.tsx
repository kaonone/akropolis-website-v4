import 'reflect-metadata';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from 'core/Root';
import configureApp from 'core/configureApp';
import getEnvParams from 'core/getEnvParams';

const { appVersion } = getEnvParams();

const appData = configureApp();

// this need for iframes on wiki site
document.domain = document.domain.includes('akropolis.io') ? 'akropolis.io' : document.domain;

/* Start application */
render(<Root {...appData} />);

/* Hot Module Replacement API */
if ((module as any).hot && process.env.NODE_ENV !== 'production') {
  (module as any).hot.accept(['./core/Root', './core/configureApp'], () => {
    const nextConfigureApp: typeof configureApp = require('./core/configureApp').default;
    const NextApp: typeof Root = require('./core/Root').App;
    const nextAppData = nextConfigureApp(appData);
    render(<NextApp {...nextAppData} jssDeps={appData.jssDeps} />);
  });
}

function render(component: React.ReactElement<any>) {
  ReactDOM.hydrate(
    component,
    document.getElementById('root'),
    () => {
      // We don't need the static css any more once we have launched our application.
      const ssStyles = document.getElementById('server-side-styles');
      if (ssStyles && ssStyles.parentNode) {
        ssStyles.parentNode.removeChild(ssStyles);
      }
    },
  );
}

/* tslint:disable */
console.info(`%cApp version: ${appVersion}`, 'background: #EBF5F8; color: gray; font-size: x-medium; border-radius: 5px; padding: 5px;');
/* tslint:enable */
