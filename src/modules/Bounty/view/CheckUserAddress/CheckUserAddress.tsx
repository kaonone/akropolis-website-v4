import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { IUser } from 'shared/types/models';
import { CheckAddressForm } from 'features/checkBounty';
import { formatUserError } from 'shared/helpers/errors';

import BountyResult from '../BountyResult/BountyResult';

import { StylesProps, provideStyles } from './CheckUserAddress.style';

type IProps = RouteComponentProps & StylesProps;

function CheckUserAddress(props: IProps) {
  const { classes } = props;
  const [tokens, setTokens] = React.useState<number>(0);
  const [address, setAddress] = React.useState('');

  const [error, setError] = React.useState('');

  const onSuccessChecking = React.useCallback((user: IUser) => {
    setTokens(user.tokens);
    setAddress(user.address);
  }, []);

  const onRetry = React.useCallback(() => {
    setTokens(0);
    setAddress('');
    setError('');
  }, []);

  return (
    <div className={classes.root}>
      {!error && !address &&
        <div className={classes.form}>
          <CheckAddressForm onSuccess={onSuccessChecking} onError={setError} />
        </div>}
      {(address || error) &&
        <BountyResult
          tokens={tokens}
          address={address}
          error={formatUserError(error)}
          onRetry={onRetry}
        />}
    </div>
  );
}

export default provideStyles(CheckUserAddress);
