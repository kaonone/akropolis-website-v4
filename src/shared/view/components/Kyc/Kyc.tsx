import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useDeps } from 'core/DepsReactContext';
import { Preloader } from 'shared/view/elements';

import { useStyles } from './Kyc.style';

interface IProps {
  group: 'quest' | 'tokenswap';
  userAddress: string;
}

export function Kyc({ group, userAddress }: IProps) {
  const classes = useStyles();
  const deps = useDeps();

  const handleScriptInject: any = React.useCallback(
    (_newState: any, { scriptTags }: { scriptTags: any[] }) => {
      if (scriptTags) {
        const scriptTag: HTMLScriptElement = scriptTags[0];

        scriptTag.addEventListener(
          'load',
          init.bind(null, group, async () => {
            const accessToken = await deps.api.sumsub.getAccessToken(userAddress);
            return accessToken.token;
          }),
        );
      }
    },
    [userAddress, deps.api.sumsub.getAccessToken],
  );

  const isServer = window.__PRERENDER_INJECTED__ && window.__PRERENDER_INJECTED__.isServer;

  return (
    <div id="idensic" className={classes.root}>
      <Preloader isShown />
      {!isServer && (
        <Helmet
          script={[{ src: 'https://static.sumsub.com/idensic/static/sns-websdk-builder.js' }]}
          onChangeClientState={handleScriptInject}
        />
      )}
    </div>
  );
}

const bannedCountries = {
  quest: ['USA'],
  tokenswap: [
    'USA',
    'AFG',
    'BLR',
    'BIH',
    'BDI',
    'CAN',
    'CAF',
    'CUB',
    'COD',
    'GIN',
    'GNB',
    'IRN',
    'IRQ',
    'LBN',
    'LBR',
    'LBY',
    'MYS',
    'PRK',
    'SOM',
    'SSD',
    'SDN',
    'SYR',
    'YEM',
    'ZWE',
  ],
};

async function init(group: 'quest' | 'tokenswap', getAccessToken: () => Promise<string>) {
  const accessToken = await getAccessToken();
  const apiUrl = 'https://api.sumsub.com';
  const flowName = 'kyc-flow';

  const snsWebSdkInstance = window.snsWebSdk
    .Builder(apiUrl, flowName)
    .withAccessToken(accessToken, async (newAccessTokenCallback: any) => {
      const newAccessToken = await getAccessToken();
      newAccessTokenCallback(newAccessToken);
    })
    .withConf({
      lang: 'en',
      requiredIdDocs: {
        docSets: [
          {
            idDocSetType: 'APPLICANT_DATA',
            types: null,
            subTypes: null,
            fields: [
              {
                name: 'firstName',
                required: true,
              },
              {
                name: 'lastName',
                required: true,
              },
            ],
          },
          {
            idDocSetType: 'IDENTITY',
            types: ['ID_CARD', 'PASSPORT', 'DRIVERS', 'RESIDENCE_PERMIT'],
          },
          {
            idDocSetType: 'SELFIE',
            types: ['SELFIE'],
          },
          {
            idDocSetType: 'PROOF_OF_RESIDENCE',
            types: ['UTILITY_BILL'],
          },
        ],
      },
      navConf: {
        skipWelcomeScreen: false,
        skipAgreementsScreen: false,
        skipReviewScreen: false,
        registration: 'enabled',
      },
      excludedCountries: bannedCountries[group],
      uiConf: {
        customCss: '',
        lang: 'en',
        steps: {
          APPLICANT_DATA: {
            customFields: [
              {
                name: 'ETH wallet',
                displayName: 'ETH wallet (for identification)',
                required: true,
              },
            ],
          },
          IDENTITY: {
            subTitle: '',
          },
          IDENTITY2: {
            subTitle: '',
          },
          SELFIE: {
            subTitle: '',
          },
          SELFIE2: {
            subTitle: '',
            videoRequired: 'enabled',
          },
          PROOF_OF_RESIDENCE: {
            subTitle: '',
          },
          PAYMENT_METHODS: {
            subTitle: '',
            paymentMethods: [
              {
                type: 'cryptoWallet',
                subTypes: ['BTC', 'ETH'],
                fields: [
                  {
                    name: 'number',
                    required: true,
                  },
                ],
                requiredPhotos: false,
              },
            ],
            editApprovedPaymentMethod: true,
          },
          INVESTABILITY: {
            subTitle: '',
          },
          ACCREDITED_INVESTOR: {
            subTitle: '',
          },
          COMPANY: {
            subTitle: '',
          },
          E_SIGN: {
            subTitle: '',
          },
        },
      },
    })
    .build();

  snsWebSdkInstance.launch('#idensic');
}
