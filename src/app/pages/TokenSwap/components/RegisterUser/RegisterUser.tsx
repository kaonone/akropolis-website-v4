import * as React from 'react';

import { RegistrationAddressForm } from 'features/checkAddress';

import { useMakeFieldsForCheckUser } from 'shared/helpers/react/useMakeFieldsForCheckUser';
import { Typography, Grid } from 'shared/view/elements';
import { IUser } from 'shared/types/models';

import { TokenSwapResult } from '../TokenSwapResult/TokenSwapResult';
import { useStyles } from './RegisterUser.style';

const translations = {
  important: 'IMPORTANT!',
  description:
    // tslint:disable-next-line: max-line-length
    'Make sure that your ETH address is the one you’re holding private keys to. Using wrong address or exchange address could result in not receiving and losing your AKRO tokens. To see AKRO in your wallet you need to add custom token.',
  tokenContract: 'Token Contract: 0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
  tokenSymbol: 'Symbol: AKRO',
  tokenDecimal: 'Decimals: 18',
};

interface IProps {
  onSuccess?(address: string): void;
}

export function RegisterUser(props: IProps) {
  const classes = useStyles();
  const { onSuccess } = props;
  const { address, tokens, error, onSuccessChecking, onError, onRetry } = useMakeFieldsForCheckUser();

  const handleRegistration = React.useCallback((user: IUser) => {
    const { address: userAddress } = user;
    onSuccess && onSuccess(userAddress);
    onSuccessChecking(user);
  }, [onSuccess, onSuccessChecking]);

  return (
    <div className={classes.root}>
      {!error && !address && (
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item>
            <Typography variant="body1" className={classes.text}>
              {translations.important}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {translations.description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.text}>
              {translations.tokenContract}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {translations.tokenSymbol}
            </Typography>
            <Typography variant="body1" className={classes.text}>
              {translations.tokenDecimal}
            </Typography>
          </Grid>
          <div className={classes.form}>
            <RegistrationAddressForm type="tokenSwap" onSuccess={handleRegistration} onError={onError} />
          </div>
        </Grid>
      )}
      {(address || error) && (
        <TokenSwapResult resultsFor="registration" tokens={tokens} address={address} error={error} onRetry={onRetry} />
      )}
    </div>
  );
}
