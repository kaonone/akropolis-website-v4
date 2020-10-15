import * as React from 'react';
import { Grid, Typography } from 'shared/view/elements';

import { AuthButton } from 'features/auth';
import { useApi } from 'services/api';
import { useSubscribable } from 'utils/react';
import { Loading } from 'app/components';
import { AkroIcon } from 'app/components/icons';
import { VestedAkroDetails } from 'features/vestedAkro';

import { useStyles } from './Preview.style';

export function Preview() {
  const classes = useStyles();
  const api = useApi();

  const accountRD = useSubscribable(() => api.vestedAkroApi.getAccount$(), [api]);

  return (
    <Grid container justify="flex-start">
      <Grid container justify="space-between" wrap="nowrap" className={classes.card}>
        <Grid container direction="column" justify="space-between">
          <Typography className={classes.description}>
            This page is for unlock your vAKRO tokens and get AKRO tokens</Typography>
          <div>
          <AuthButton withDisconnectLink />
          </div>
        </Grid>
        <div><AkroIcon className={classes.akro} /></div>
      </Grid>
      <Loading data={accountRD}>
        {account => account ? (
          <Grid container justify="space-between" wrap="nowrap" className={classes.card}>
            <VestedAkroDetails address={account} />
          </Grid>
        ) : null}
      </Loading>
    </Grid>
  );
}
