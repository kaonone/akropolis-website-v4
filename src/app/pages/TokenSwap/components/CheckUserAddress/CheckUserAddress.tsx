import * as React from 'react';

import { useMakeFieldsForCheckUser } from 'shared/helpers/react/useMakeFieldsForCheckUser';
import { CheckAddressForm } from 'features/checkAddress';

import { TokenSwapResult } from '../TokenSwapResult/TokenSwapResult';

import { useStyles } from './CheckUserAddress.style';

export function CheckUserAddress() {
  const classes = useStyles();
  const { address, tokens, error, onSuccessChecking, onError, onRetry } = useMakeFieldsForCheckUser();

  return (
    <div className={classes.root}>
      {!error && !address && (
        <div className={classes.form}>
          <CheckAddressForm type="tokenSwap" onSuccess={onSuccessChecking} onError={onError} />
        </div>
      )}
      {(address || error) && (
        <TokenSwapResult resultsFor="checking" tokens={tokens} address={address} error={error} onRetry={onRetry} />
      )}
    </div>
  );
}
