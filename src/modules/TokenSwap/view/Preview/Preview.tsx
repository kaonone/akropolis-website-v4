import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Button, Grid, Typography } from 'shared/view/elements';

import { StylesProps, provideStyles } from './Preview.style';
import routes from 'modules/routes';

const translation = {
  tokenSwap: 'Token Swap',
  // tslint:disable-next-line: max-line-length
  description: `This page is for our seed/private/presale participants - if you're one of them, please follow the procedure below to do a tokenswap of old AKT to AKRO tokens.`,
  register: 'Register',
  checkAccount: 'Check Account',
};

type IProps = RouteComponentProps & StylesProps;

export default provideStyles(function Preview(props: IProps) {
  const { classes, history } = props;

  const onRegister = React.useCallback(() => {
    history.push(routes.tokenswap.registration.getRedirectPath());
  }, []);

  const onCheckAddress = React.useCallback(() => {
    history.push(routes.tokenswap.check.getRedirectPath());
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="body1" className={classes.description}>{translation.description}</Typography>
      <Grid container spacing={16} justify="center" className={classes.actions}>
        <Grid item xs={12} sm={6}>
          <Button
            color="gradient"
            onClick={onRegister}
            fullWidth
          >
            {translation.register}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            color="gradient"
            onClick={onCheckAddress}
            fullWidth
          >
            {translation.checkAccount}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
});
