import React, { useCallback } from 'react';
import * as R from 'ramda';
import cn from 'classnames';
import Avatar from '@material-ui/core/Avatar';

import { NETWORK_ID } from 'env';
import { useAuthContext } from 'services/auth';
import { tKeys, useTranslate } from 'services/i18n';
import { getShortAddress } from 'utils/format';
import { useSubscribable } from 'utils/react';
import { getAdaptiveFontSize, makeStyles } from 'utils/styles';
import {
  Button,
  Typography,
  Grid,
  AddressIcon,
  ButtonProps,
  Loading,
  CircularProgress,
} from 'app/components';
import { isLoading } from 'utils/remoteData';

interface Props {
  children?: React.ReactNode;
  size?: ButtonProps['size'];
  withDisconnectLink?: boolean;
}

export function AuthButton({ children, size, withDisconnectLink }: Props) {
  const classes = useStyles();
  const { t } = useTranslate();
  const { web3Manager, openModal, connectCommunication } = useAuthContext();

  const accountRD = useSubscribable(() => web3Manager.account$, [web3Manager]);

  const isConnected = accountRD.map(Boolean).getOrElse(R.F);

  const handleAuthButtonClick = useCallback(() => {
    openModal();
  }, [openModal]);

  const buttonContent = children || t(tKeys.features.auth.connect.getKey());

  return (
    <>
      <Button
        size={size}
        color={isConnected ? 'default' : 'primary'}
        variant={isConnected ? 'outlined' : 'contained'}
        onClick={handleAuthButtonClick}
        className={cn(classes.root, { [classes.connected]: isConnected })}
        endIcon={
          (isLoading(accountRD) || connectCommunication.status === 'pending') && (
            <CircularProgress size={16} />
          )
        }
      >
        <Loading data={accountRD} loader={buttonContent}>
          {account =>
            account ? (
              <>
                <Avatar className={classes.icon}>
                  <AddressIcon address={account} />
                </Avatar>
                <Grid
                  container
                  alignItems="flex-start"
                  direction="column"
                  spacing={0}
                  className={classes.container}
                >
                  <Grid item>
                    <Typography className={classes.address}>{getShortAddress(account)}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.connectedTo} align="left" component="div">
                      <span className={classes.network}>
                        {t(tKeys.features.networkWarning.networkType[NETWORK_ID].getKey())}
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>{buttonContent}</>
            )
          }
        </Loading>
      </Button>
      {withDisconnectLink && (
        <Loading data={accountRD}>
          {account => account ? (
            <>
              <br />
              <Typography
                className={classes.disconnectLink}
                onClick={handleAuthButtonClick}
              >Disconnect or change wallet
              </Typography>
            </>
          ) : null}
        </Loading>
      )}
    </>
  );
}

const useStyles = makeStyles(
  theme => ({
    root: {
      '&$connected': {
        padding: 0,
      },
      minWidth: 'unset',
    },
    address: {
      ...getAdaptiveFontSize(theme),
      lineHeight: 1,
    },
    connectedTo: {
      ...getAdaptiveFontSize(theme),
      lineHeight: 1,
      opacity: 0.5,
      marginTop: 3,
    },
    network: {
      textTransform: 'capitalize',
    },
    container: {
      marginLeft: 11,
      paddingRight: 16,
    },
    icon: {
      width: 34,
      height: 34,
      fontSize: 34,
    },
    connected: {},
    disconnectLink: {
      marginTop: 10,
      position: 'relative',
      display: 'inline-block',

      '&:hover': {
        cursor: 'pointer',
        opacity: 0.7,
      },

      '&:after': {
        content: `''`,
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        borderBottom: '1px solid #ffffff',
        opacity: 0.2,
      },
      [theme.breakpoints.up('mobileXS')]: {
        fontSize: '0.8rem',
      },
      [theme.breakpoints.up('mobileMD')]: {
        fontSize: '1rem',
      },
    },
  }),
  { name: 'AuthButton' },
);
