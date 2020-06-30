import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  background: {
    fill: '#FFF !important',
  },
});

// tslint:disable:max-line-length
function DiscordIcon(props: GetProps<typeof SvgIcon>) {
  const { classes: _, ...rest } = props;
  const classes = useStyles();
  return (
    <SvgIcon {...rest} viewBox="0 0 20 23" xmlSpace="preserve">
      <g fill="none" fill-rule="evenodd">
        <path className={classes.background} d="M2 4h16v12H2z" />
        <path
          fill="currentColor"
          d="M17.66 0H2.34A2.34 2.34 0 0 0 0 2.35v15.46c0 1.3 1.05 2.35 2.34 2.35H15.3l-.6-2.11 1.46 1.36 1.38 1.28L20 22.86V2.34C20 1.04 18.95 0 17.66 0zm-4.42 14.92L12.5 14c1.5-.42 2.07-1.36 2.07-1.36-.47.31-.91.52-1.32.67a8 8 0 0 1-4.62.48 9.6 9.6 0 0 1-2.5-.88L6 12.86l-.04-.04a3.84 3.84 0 0 1-.32-.2s.54.92 2 1.36l-.78.94c-2.53-.08-3.49-1.73-3.49-1.73 0-3.67 1.65-6.67 1.65-6.67 1.64-1.23 3.21-1.2 3.21-1.2l.12.14c-2.06.6-3 1.5-3 1.5s.24-.14.66-.33a8.97 8.97 0 0 1 2.6-.72l.2-.03a9.3 9.3 0 0 1 5.74 1.08s-.89-.87-2.83-1.45l.15-.18s1.57-.04 3.21 1.2c0 0 1.65 2.98 1.65 6.66 0 0-.97 1.65-3.5 1.73zM7.93 9.6c-.65 0-1.16.57-1.16 1.27 0 .7.52 1.27 1.17 1.27.65 0 1.15-.58 1.15-1.27.02-.7-.5-1.27-1.16-1.27m4.17 0c-.65 0-1.16.57-1.16 1.27 0 .7.52 1.27 1.17 1.27.65 0 1.16-.58 1.16-1.27 0-.7-.51-1.27-1.17-1.27"
        />
      </g>
    </SvgIcon>
  );
}

export default DiscordIcon;
