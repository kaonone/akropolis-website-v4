import * as React from 'react';

import { Button, Typography, Grid, CircleProgressBar } from 'shared/view/elements';
import { copyToClipBoard } from 'shared/helpers';

import { StylesProps, provideStyles } from './SwapTokens.style';

import qrMock from './img/qrMock.png';

// tslint:disable: max-line-length
const translations = {
  description: 'By sending tokens to this address, you agree with Terms and Conditions',
  copyAddress: 'Copy address',
  sendViaMetamask: 'Send via Metamask',
};

interface IOwnProps {
  address: string;
  isSending: boolean;
  onSendViaMetaMask(): void;
}

type IProps = IOwnProps & StylesProps;

function SwapTokens(props: IProps) {
  const { classes, address, onSendViaMetaMask, isSending } = props;

  const copyAddress = React.useCallback(() => {
    copyToClipBoard(address);
  }, [address]);

  return (
    <div className={classes.root}>
      <Typography variant="body1" className={classes.text}>{translations.description}</Typography>
      <Grid container justify="center" alignItems="center" spacing={16} className={classes.address}>
        <Grid item>
          <img src={qrMock} className={classes.qrCode} />
        </Grid>
        <Grid item>
          <Typography variant="body1">{address}</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={16}  >
        <Grid item xs={12} md={5}>
          <Button
            onClick={copyAddress}
            className={classes.acceptButton}
            color="gradient"
            variant="contained"
            fullWidth
          >
            {translations.copyAddress}
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Button
            onClick={onSendViaMetaMask}
            className={classes.acceptButton}
            color="gradient"
            variant="contained"
            fullWidth
            disabled={isSending}
          >
            {!isSending && translations.sendViaMetamask}
            {isSending && <CircleProgressBar size={32} />}
          </Button>
        </Grid>
      </Grid>
    </div>
  );

}

export default provideStyles(SwapTokens);
