import * as React from 'react';
import cn from 'classnames';
import SvgIcon from '@material-ui/core/SvgIcon';

import { NETWORK_ID } from 'env';
import { useCommunication } from 'utils/react';
import {
  ButtonBase,
  Typography,
  Box,
  ShortAddress,
  Grid,
  Button,
} from 'app/components';
import { WalletType } from 'services/api';
import { tKeys, useTranslate } from 'services/i18n';
import { getAdaptiveFontSize, makeStyles, useBreakpointsMatch } from 'utils/styles';
import { zeroAddress } from 'utils/mock';
import {
  Bitski,
  Fortmatic,
  Web3,
  Portis,
  WalletConnect,
  Walletlink,
} from 'app/components/icons/wallets';

interface ProviderButtonProps {
  fullWidth?: boolean;
  fullHeight?: boolean;
  type: WalletType;
  connectedAddress: string | null;
  onUnavailableProviderClick?: () => void;
  onClick?: () => void;
  disconnect(): void;
  connect(wallet: WalletType): Promise<void>;
}

const iconByWallet: Record<WalletType, typeof SvgIcon> = {
  bitski: Bitski,
  fortmatic: Fortmatic,
  web3: Web3,
  portis: Portis,
  connectWallet: WalletConnect,
  walletlink: Walletlink,
};

const walletTitle: Record<WalletType, string> = {
  bitski: 'Bitski',
  fortmatic: 'Fortmatic',
  web3: 'Web3',
  portis: 'Portis',
  connectWallet: 'WalletConnect',
  walletlink: 'WalletLink',
};

export function ProviderButton({
  type,
  connect,
  connectedAddress,
  disconnect,
  fullWidth,
  fullHeight,
  onClick,
  onUnavailableProviderClick,
}: ProviderButtonProps) {
  const classes = useStyles();
  const connecting = useCommunication(connect, [connect]);
  const Icon = iconByWallet[type];
  const isMobile = useBreakpointsMatch({ to: 'mobileMD' });

  const { t } = useTranslate();

  const handleClick = React.useCallback(() => {
    if (connectedAddress) {
      return disconnect();
    }
    const provider = window.web3 ? window.web3.currentProvider : null;
    const hasWeb3Provider = window.ethereum || provider;
    const isConnectingUnavailable = type === 'web3' && !hasWeb3Provider;

    if (isConnectingUnavailable && onUnavailableProviderClick) {
      onUnavailableProviderClick();
      return;
    }

    onClick && onClick();
    return connecting.execute(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disconnect, connecting.execute, type, connectedAddress, onClick, onUnavailableProviderClick]);

  return (
    <ButtonBase
      focusRipple
      className={cn(classes.root, {
        [classes.fullWidth]: fullWidth,
        [classes.fullHeight]: fullHeight,
      })}
      color="primary"
      onClick={handleClick}
      focusVisibleClassName={classes.focusVisible}
    >
      <Grid container direction="column" alignItems="center" className={classes.container}>
        <Grid
          item
          className={cn(classes.icon, {
            [classes.forWeb3]: type === 'web3',
          })}
        >
          <Icon fontSize="inherit" />
        </Grid>
        <Grid item>
          <Typography className={classes.title} component="div">
            {connectedAddress ? <Address address={connectedAddress} /> : walletTitle[type]}
          </Typography>
        </Grid>
        {connectedAddress ? (
          <>
            <Grid item>
              <Typography className={classes.description}>{`${t(
                tKeys.features.auth.modalTitle.connectedTo.getKey(),
              )} ${t(tKeys.features.networkWarning.networkType[NETWORK_ID].getKey())}`}</Typography>
            </Grid>
            <Box clone alignSelf="stretch">
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  size={isMobile ? 'extra-small' : 'small'}
                  component="div"
                  fullWidth
                >
                  {t(tKeys.features.auth.modalTitle.disconnect.getKey())}
                </Button>
              </Grid>
            </Box>
          </>
        ) : (
          <div className={classes.loading}>
            <span className={classes.hiddenAddress}>
              <Address address={zeroAddress} />
            </span>
            {/* <DeprecatedLoading communication={connecting} ignoreError /> */}
          </div>
        )}
      </Grid>
    </ButtonBase>
  );
}

function Address({ address }: { address: string }) {
  return <ShortAddress disableCopy address={address} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'flex-start',
    transition: theme.transitions.create(['background-color']),
    borderRadius: 6,
    width: '100%',

    [theme.breakpoints.up('mobileMD')]: {
      '&:hover, &$focusVisible': {
        backgroundColor: '#191924',
      },

      padding: theme.spacing(1),
      minHeight: 115,
      minWidth: 100,
    },

    [theme.breakpoints.up('tabletXS')]: {
      minWidth: 135,
    },
  },

  focusVisible: {},

  fullWidth: {
    width: '100%',
  },

  fullHeight: {
    height: '100%',
  },

  loading: {
    display: 'flex',
    alignItems: 'center',
  },

  hiddenAddress: {
    display: 'inline-block',
    overflow: 'hidden',
    width: 0,
  },

  description: {
    opacity: 0.5,
    ...getAdaptiveFontSize(theme),
    marginBottom: 10,
  },

  title: {
    lineHeight: 1,
    marginTop: 12,
    fontSize: 13,

    [theme.breakpoints.up('mobileMD')]: {
      fontSize: 14,
    },

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 16,
    },
  },

  icon: {
    fontSize: 40,

    [theme.breakpoints.up('mobileMD')]: {
      fontSize: 46,
    },

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 53,
    },

    '&$forWeb3': {
      fontSize: 24,
      padding: '6px 0 10px',

      [theme.breakpoints.up('mobileMD')]: {
        fontSize: 30,
      },

      [theme.breakpoints.up('tabletXS')]: {
        fontSize: 30,
        padding: '8px 0 15px',
      },
    },
  },

  container: {},
  forWeb3: {},
}));
