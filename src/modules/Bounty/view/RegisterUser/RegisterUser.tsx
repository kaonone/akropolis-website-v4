import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { RegistrationAddressForm } from 'features/checkBounty';

import { useMakeFieldsForCheckUser } from 'shared/helpers/react/useMakeFieldsForCheckUser';
import { Typography, Grid } from 'shared/view/elements';

import BountyResult from '../BountyResult/BountyResult';

import { StylesProps, provideStyles } from './RegisterUser.style';

const translations = {
  important: 'IMPORTANT!',
  // tslint:disable-next-line: max-line-length
  description: 'Make sure that your ETH address is the one you’re holding private keys to. Using wrong address or exchange address could result in not receiving and losing your AKT tokens. To see AKT in your wallet you need to add custom token.',
  tokenContract: 'Token Contract:',
  tokenSymbol: 'Symbol: AKT',
  tokenDecimal: 'Decimals: 18',
};

type IProps = RouteComponentProps & StylesProps;

function RegisterUser(props: IProps) {
  const { classes } = props;
  const { address, tokens, error, onSuccessChecking, onError, onRetry } = useMakeFieldsForCheckUser();

  return (
    <div className={classes.root}>
      {!error && !address &&
        <Grid container direction="column" alignItems="center" spacing={24}>
          <Grid item>
            <Typography variant="body1" className={classes.text}>{translations.important}</Typography>
            <Typography variant="body1" className={classes.text}>{translations.description}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.text}>{translations.tokenContract}</Typography>
            <Typography variant="body1" className={classes.text}>{translations.tokenSymbol}</Typography>
            <Typography variant="body1" className={classes.text}>{translations.tokenDecimal}</Typography>
          </Grid>
          <div className={classes.form}>
            <RegistrationAddressForm onSuccess={onSuccessChecking} onError={onError} />
          </div>
        </Grid>}
      {(address || error) &&
        <BountyResult
          tokens={tokens}
          address={address}
          error={error}
          onRetry={onRetry}
        />}
    </div>
  );
}

export default provideStyles(RegisterUser);
