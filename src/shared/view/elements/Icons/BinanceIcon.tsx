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
function BinanceIcon(props: GetProps<typeof SvgIcon>) {
  const { classes: _, ...rest } = props;
  const classes = useStyles();
  return (
    <SvgIcon {...rest} viewBox="0 0 20 20.5">
      <g fill="none" fillRule="evenodd">
        <path fill="currentColor" d="M9.99 0a9.99 9.99 0 1 1 0 19.97A9.99 9.99 0 0 1 9.99 0z" />
        <path
          d="M10.1 3.4l1.64 1.7L7.6 9.3 5.95 7.65zm2.44 2.55l1.64 1.66-6.6 6.57-1.63-1.63zM5.08 8.38l1.68 1.7-1.68 1.66-1.69-1.66zm10.01.11l1.64 1.67-6.6 6.57L8.5 15.1z"
          className={classes.background}
          fillRule="nonzero"
        />
      </g>
    </SvgIcon>
  );
}

export default BinanceIcon;
