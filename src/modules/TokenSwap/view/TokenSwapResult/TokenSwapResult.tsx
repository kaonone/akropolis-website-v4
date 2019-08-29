import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import { TOKEN_SWAP_T_AND_C_URL } from 'assets';
import { SUPPORT_EMAIL } from 'core/constants';
import { Typography, Button, Grid, Link } from 'shared/view/elements';
import { UserError } from 'shared/types/models';
import routes from 'modules/routes';

import { StylesProps, provideStyles } from './TokenSwapResult.style';

// tslint:disable: max-line-length
interface IOwnProps {
  address: string;
  tokens: string;
  error: UserError | null;
  resultsFor: 'registration' | 'checking';
  onRetry(): void;
}

type IProps = IOwnProps & RouteComponentProps & StylesProps;

function TokenSwapResult(props: IProps) {
  const { classes, history, address, tokens, error, onRetry, resultsFor } = props;

  const onEndCheck = React.useCallback(() => {
    history.push(routes.tokenswap.getRedirectPath());
  }, []);

  const isUnknownError = error === 'unknown';

  const messageByError: Record<UserError, () => React.ReactNode> = {
    notConfirmed: () => (
      <Typography variant="body1" className={classes.error}>
        <span>It seems like we have your ETH address in our database, but you didn’t confirm your residency and</span>{' '}
        <Link href={TOKEN_SWAP_T_AND_C_URL}>
          {'Terms & Conditions'}
        </Link>
        <span>, please do so </span>
        <RouterLink to={routes.tokenswap.registration.getRedirectPath()}>here</RouterLink>{' '}
        <span>to see amount of AKRO tokens you will receive.</span>
      </Typography>),
    notExist: () => (
      <Typography variant="body1" className={classes.error}>
        <span>{`We’re sorry, but it seems like your ETH address ${address} is not in our database. Please contact us via `}</span>
        <span>
          <Link href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </Link>
        </span>
      </Typography>),
    unknown: () => (
      <Typography className={classes.error} variant="body1" align="center">Unknown Error</Typography>
    ),
  };

  return (
    <div className={classes.root}>
      {!error &&
        <>
          <Typography variant="body1" className={classes.text} >
            {`Your ETH address ${address} is registered in our database.`}
          </Typography>
          <Typography className={classes.tokensAmount} variant="body1" >
            <span>You will receive {tokens} AKRO. Vesting schedule: 2-month lockup after Huobi Prime Offering, vesting monthly over 12 months thereafter (you will receive 1/12 of tokens each month starting from September 16). </span>
            {resultsFor === 'registration'
              ? (<>
                <span>To receive tokens you need to go through </span>
                <RouterLink to={routes.tokenswap.kyc.getRedirectPath()}>KYC procedure</RouterLink>.
            </>) : (<>
                <span>To receive tokens you need to go through KYC procedure. If you already did so and got a confirmation from KYC provider - you don’t need to do anything else. If you still haven’t passed KYC - please go through the </span>
                <RouterLink to={routes.tokenswap.registration.getRedirectPath()}>registration process</RouterLink>{' '}
                <span>again.</span>
              </>)
            }
          </Typography>
          <Grid container wrap="nowrap" justify="center">
            <Button
              color="gradient"
              variant="contained"
              onClick={onEndCheck}
              className={classes.button}
            >
              ok
            </Button>
          </Grid>
        </>}
      {error && messageByError[error] &&
        <div>
          {messageByError[error]()}
          <Grid container wrap="nowrap" justify="center">
            <Button
              color="gradient"
              variant="contained"
              onClick={isUnknownError ? onRetry : onEndCheck}
              className={classes.button}
            >
              {isUnknownError ? 'Retry' : 'ok'}
            </Button>
          </Grid>
        </div>}
    </div>
  );
}

export default withRouter(provideStyles(TokenSwapResult));
