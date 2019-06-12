import BigNumber from 'bignumber.js';

import { ICommunication } from 'shared/types/redux';

export const initialCommunicationField: ICommunication = { isRequesting: false, error: '' };

export const ONE_ERC20 = new BigNumber('1e18');
