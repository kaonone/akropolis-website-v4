import * as React from 'react';
import cn from 'classnames';
import { useApi } from 'services/api';
import { useSubscribable } from 'utils/react';
import { Loading, Grid, Button, Typography } from 'app/components';

import { useStyles } from './VestedAkroDetails.style';

export function VestedAkroDetails({ address }: { address: string }) {
  const classes = useStyles();
  const api = useApi();

  const balancesRD = useSubscribable(() => api.vestedAkroApi.getBalances$(address), [api, address]);

  const onRedeem = React.useCallback(() => api.vestedAkroApi.unlockAkro(address), [api]);

  const formatValue = (value: any) => value.toFormattedString().split(' ')[0];

  return (
    <Loading data={balancesRD}>
      {balances => {
        const allTokens = balances[0].add(balances[1]);
        const availableToRedeemTokens = balances[1].add(balances[2]);
        return balances ? (
          <Grid container direction="column" justify="space-between">
            <Grid container justify="flex-start" wrap="nowrap">
              <Grid direction="column" className={classes.group}>
                <Typography className={classes.groupTitle}>Available for Redeem</Typography>
                <Typography className={classes.groupValue}>{formatValue(availableToRedeemTokens)}</Typography>
                <Typography className={classes.groupToken}>AKRO</Typography>
              </Grid>
              <Grid direction="column" className={classes.group}>
                <Typography
                  className={classes.groupTitle}
                >
                  Vested Balance
                </Typography>
                <Typography
                  className={cn(classes.groupValue, {[classes.blurred]: true })}
                >
                  {formatValue(allTokens)}
                </Typography>
                <Typography className={cn(classes.groupToken, {[classes.blurred]: true })}>AKRO</Typography>
              </Grid>
            </Grid>
            <Grid justify="flex-start">
              <Button
                disabled={availableToRedeemTokens.isZero()}
                variant="contained"
                color="primary"
                onClick={onRedeem}
              >
                Redeem
              </Button>
            </Grid>
          </Grid>
        ) : null;
      }}
    </Loading>
  );
}
