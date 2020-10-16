import React, { useState, useCallback } from 'react';
import cn from 'classnames';

import { CloseIcon } from 'app/components/icons';
import { makeStyles, AncestorBackgroundHackProvider, useTheme } from 'utils/styles';
import { CommunicationState } from 'utils/react';
import { Dialog, DialogTitle, Hint, Grid, Link, Typography, IconButton } from 'app/components';
import { tKeys, useTranslate } from 'services/i18n';
import { WalletType, wallets } from 'services/api';
import { T_AND_C_URL, PRIVACY_POLICY_URL } from 'docs';

import { ProviderButton } from './ProviderButton';
import { Web3Message } from './Web3Message';

interface AuthModalProps {
  isOpened: boolean;
  connecting: CommunicationState<any, any>;
  account: string | null;
  connectedWallet: WalletType | null;
  onClose(): void;
  connect(wallet: WalletType): Promise<void>;
  disconnect(): void;
}

export function AuthModal(props: AuthModalProps) {
  const { isOpened, onClose, connecting, connect, account, disconnect, connectedWallet } = props;
  const isLogged: boolean = !!account && !!connectedWallet;

  const classes = useStyles();
  const theme = useTheme();

  const { t } = useTranslate();
  const { modalTitle } = tKeys.features.auth;

  const [showWeb3Message, setShowWeb3Message] = useState(false);

  const handleAuthModalClose = useCallback(() => {
    setShowWeb3Message(false);
    onClose();
  }, [onClose]);

  const handleProviderButtonClick = useCallback(() => {
    setShowWeb3Message(false);
  }, []);

  const handleUnavailableWeb3ProviderClick = useCallback(() => {
    setShowWeb3Message(true);
  }, []);

  return (
    // tabIndex needed for Fortmatic form. Without tabIndex, form input cannot be taken into focus
    <AncestorBackgroundHackProvider backgroundColor={theme.palette.background.paper}>
      <Dialog
        classes={{ paper: classes.root }}
        open={isOpened}
        onClose={handleAuthModalClose}
        TransitionProps={{ tabIndex: 'unset' } as any}
        scroll="body"
      >
        <DialogTitle className={classes.title} disableTypography>
          {isLogged ? t(modalTitle.connected.getKey()) : t(modalTitle.disconnected.getKey())}
        </DialogTitle>
        <IconButton size="small" className={classes.closeButton} onClick={handleAuthModalClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <div className={classes.content}>
          <Grid container spacing={3} justify="center">
            {wallets.map((type, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                key={index}
                className={classes.providerButton}
                style={{ order: index * 2 }}
              >
                <ProviderButton
                  connect={connect}
                  disconnect={disconnect}
                  type={type}
                  connectedAddress={type === connectedWallet ? account : null}
                  key={type}
                  onClick={handleProviderButtonClick}
                  onUnavailableProviderClick={handleUnavailableWeb3ProviderClick}
                />
              </Grid>
            ))}
            {showWeb3Message && (
              <Grid item className={classes.web3Message}>
                <div className={classes.messageBox}>
                  <Web3Message />
                </div>
              </Grid>
            )}
          </Grid>
        </div>
        <div className={classes.content}>
          <Typography className={cn(classes.messageBox, classes.aboutTerms)} component="div">
            By connecting your wallet, you agree to our{' '}
            <Link
              href={T_AND_C_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Terms of Service"
              color="textPrimary"
            >
              Terms&nbsp;of&nbsp;Service
            </Link>{' '}
            and confirm that you have read and understood the{' '}
            <Link
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Privacy Policy"
              color="textPrimary"
            >
              Privacy&nbsp;Policy
            </Link>
            .
          </Typography>
        </div>
        {connecting.error && (
          <div className={classes.error}>
            <Hint color="error">{connecting.error}</Hint>
          </div>
        )}
      </Dialog>
    </AncestorBackgroundHackProvider>
  );
}

const useStyles = makeStyles(
  theme => ({
    root: {
      padding: '20px 24px',
      margin: 15,

      [theme.breakpoints.up('mobileMD')]: {
        margin: 32,
      },

      [theme.breakpoints.up('tabletXS')]: {
        padding: '50px 60px',
      },
    },

    title: {
      fontSize: 16,
      paddingBottom: 25,

      [theme.breakpoints.up('mobileMD')]: {
        fontSize: 22,
      },

      [theme.breakpoints.up('tabletXS')]: {
        padding: 0,
      },
    },

    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,

      [theme.breakpoints.up('mobileMD')]: {
        top: 24,
        right: 24,
      },
    },

    content: {
      overflow: 'visible',
      padding: 0,

      [theme.breakpoints.up('tabletXS')]: {
        marginTop: 30,
      },
    },

    providerButton: {
      textAlign: 'center',
      paddingBottom: 10,

      [theme.breakpoints.up('tabletXS')]: {
        padding: '12px 13px',
        marginTop: 20,
      },
    },

    web3Message: {
      order: 3,

      [theme.breakpoints.up('tabletXS')]: {
        order: 5,
      },
    },

    messageBox: {
      padding: '10px 11px',
      backgroundColor: 'rgba(28, 28, 42, 0.5)',
      borderRadius: 6,

      [theme.breakpoints.up('mobileMD')]: {
        padding: '12px 24px',
      },

      [theme.breakpoints.up('tabletXS')]: {
        marginLeft: -20,
        marginRight: -20,
      },
    },

    aboutTerms: {
      fontSize: 10,
      color: 'rgba(255, 255, 255, 0.7)',

      [theme.breakpoints.up('mobileMD')]: {
        fontSize: 13,
      },
      [theme.breakpoints.up('tabletXS')]: {
        fontSize: 12,
      },
    },

    error: {
      marginTop: 5,
    },
  }),
  { name: 'AuthModal' },
);
