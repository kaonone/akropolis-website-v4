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
function TelegramIcon(props: GetProps<typeof SvgIcon>) {
  const { classes: _, ...rest } = props;
  const classes = useStyles();
  return (
    <SvgIcon {...rest} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill="currentColor" />
        <path
          className={classes.background}
          fillRule="nonzero"
          d="M4.16 9.91l6.74-2.77c.66-.3 2.92-1.21 2.92-1.21s1.04-.41.95.57c-.03.4-.26 1.82-.5 3.36l-.71 4.53s-.06.67-.56.78c-.49.12-1.3-.4-1.44-.52-.12-.08-2.17-1.38-2.92-2.02-.2-.17-.43-.52.03-.93 1.04-.95 2.28-2.13 3.03-2.88.35-.35.7-1.16-.75-.18L6.88 11.4s-.47.29-1.33.03-1.88-.61-1.88-.61-.7-.43.5-.9z"
        />
      </g>
    </SvgIcon>
  );
}

export default TelegramIcon;
