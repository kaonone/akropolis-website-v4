import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import termsURL from 'assets/Akropolis_Terms_and_Conditions_Bounty.pdf';
import { SUPPORT_EMAIL } from 'core/constants';
import { Typography, Button, Grid, Link } from 'shared/view/elements';
import { UserError } from 'shared/types/models';
import routes from 'modules/routes';

import { StylesProps, provideStyles } from './BountyResult.style';

// tslint:disable: max-line-length
interface IOwnProps {
  address: string;
  tokens: string;
  error: UserError | null;
  onRetry(): void;
}

type IProps = IOwnProps & RouteComponentProps & StylesProps;

function BountyResult(props: IProps) {
  const { classes, history, address, tokens, error, onRetry } = props;

  const onEndCheck = React.useCallback(() => {
    history.push(routes.bounty.getRedirectPath());
  }, []);

  const isUnknownError = error === 'unknown';

  const messageByError: Record<UserError, () => React.ReactNode> = {
    notConfirmed: () => (
      <Typography variant="body1" className={classes.error}>
        <span>It seems like we have your ETH address in our database, but you didn’t confirm your residency and</span>{' '}
        <Link href={termsURL}>
          {'Terms&Conditions'}
        </Link>
        <span>, please do so </span>
        {<RouterLink to={routes.bounty.registration.getRedirectPath()}>here</RouterLink>}{' '}
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
            {`Your ETH address  ${address} is registered in our database.`}
          </Typography>
          <Typography className={classes.tokensAmount} variant="body1" >
            {`You will receive ${tokens} AKRO (this is rounded amount of tokens)`}
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

export default withRouter(provideStyles(BountyResult));
