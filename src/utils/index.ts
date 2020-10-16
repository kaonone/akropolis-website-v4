import { curry } from 'ramda';
import { getSignificantValue as mkGetSignificantValue } from '@akropolis-web/primitives';

import { SIGNIFICANT_FRACTIONAL_DIGITS } from 'env';

const getSignificantValue = curry(mkGetSignificantValue)(SIGNIFICANT_FRACTIONAL_DIGITS);

export * from './getErrorMsg';
export { getSignificantValue };
