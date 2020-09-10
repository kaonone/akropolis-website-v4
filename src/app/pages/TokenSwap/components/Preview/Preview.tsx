import * as React from 'react';
import { useHistory } from 'react-router';

import routes from 'app/routes';
import { Button, Grid, Typography } from 'shared/view/elements';

import { useStyles } from './Preview.style';

const translation = {
  tokenSwap: 'Token Swap',
  // tslint:disable-next-line: max-line-length
  description: `This page is for our AKT token holders - if you’re one of them, please follow the procedure below to do a tokenswap of old AKT to AKRO tokens.`,
  register: 'Register',
  checkAccount: 'Check Account',
};

export function Preview() {
  const classes = useStyles();
  const history = useHistory();

  const onRegister = React.useCallback(() => {
    history.push(routes.tokenswap.registration.getRedirectPath());
  }, []);

  const onCheckAddress = React.useCallback(() => {
    history.push(routes.tokenswap.check.getRedirectPath());
  }, []);

  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="body1" className={classes.description}>
        {translation.description}
      </Typography>
      <Grid container spacing={2} justify="center" className={classes.actions}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="gradient" onClick={onRegister} fullWidth>
            {translation.register}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="gradient" onClick={onCheckAddress} fullWidth>
            {translation.checkAccount}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
