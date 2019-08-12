import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Preloader } from 'shared/view/elements';
import { StylesProps, provideStyles } from './Kyc.style';

type IProps = RouteComponentProps & StylesProps;

function Kyc({ classes }: IProps) {
  const handleScriptInject: any = React.useCallback((_newState: any, { scriptTags }: { scriptTags: any[] }) => {
    if (scriptTags) {
      const scriptTag: HTMLScriptElement = scriptTags[0];
      scriptTag.addEventListener('load', init);
    }
  }, []);

  const isServer = window.__PRERENDER_INJECTED__ && window.__PRERENDER_INJECTED__.isServer;

  return (
    <div id="idensic" className={classes.root}>
      <Preloader isShown />
      {!isServer && (
        <Helmet
          script={[{ src: 'https://test-api.sumsub.com/idensic/static/sumsub-kyc.js' }]}
          onChangeClientState={handleScriptInject}
        />
      )}
    </div>
  );
}

function init() {
  window.idensic.init(
    '#idensic',
    {
      'clientId': 'akropolis',
      'requiredIdDocs': {
        'docSets': [{
          'idDocSetType': 'IDENTITY',
          'types': ['ID_CARD', 'PASSPORT', 'DRIVERS'],
        },
        { 'idDocSetType': 'PAYMENT_METHODS', 'types': ['PAYMENT_METHOD'] }],
      },
      'navConf': {
        'skipWelcomeScreen': false,
        'skipAgreementsScreen': false,
        'skipReviewScreen': false,
        'registration': 'enabled',
      },
      'uiConf': {
        'customCss': '',
        'lang': 'en',
        'steps': {
          'IDENTITY': {
            'subTitle': '',
          },
          'IDENTITY2': {
            'subTitle': '',
          },
          'SELFIE': {
            'subTitle': '',
          },
          'SELFIE2': {
            'subTitle': '',
            'videoRequired': 'enabled',
          },
          'PROOF_OF_RESIDENCE': {
            'subTitle': '',
          },
          'PAYMENT_METHODS': {
            'subTitle': '',
            'paymentMethods': [
              {
                'type': 'cryptoWallet',
                'subTypes': [
                  'BTC',
                  'ETH',
                ],
                'fields': [
                  {
                    'name': 'number',
                    'required': true,
                  },
                ],
                'requiredPhotos': false,
              },
            ],
            'editApprovedPaymentMethod': true,
          },
          'INVESTABILITY': {
            'subTitle': '',
          },
          'ACCREDITED_INVESTOR': {
            'subTitle': '',
          },
          'COMPANY': {
            'subTitle': '',
          },
          'E_SIGN': {
            'subTitle': '',
          },
        },
      },
    },
  );
}

export default provideStyles(React.memo(Kyc));
