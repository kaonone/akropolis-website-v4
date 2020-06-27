// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    width: 'unset',
  },
});

export function CreditPool(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 67 46">
      <g fill="#FFF" fillRule="evenodd">
        <path
          opacity=".4"
          d="M20.95 0c-1.1 0-2.14.26-3.12.83L3.11 9.24A6.06 6.06 0 0 0 0 14.53v16.76a6.06 6.06 0 0 0 3.11 5.29l14.72 8.35a6 6 0 0 0 3.12.83c1.1 0 2.14-.26 3.1-.83l14.73-8.35a6.06 6.06 0 0 0 3.11-5.29V14.53a6.06 6.06 0 0 0-3.11-5.29L24.06.83A6.69 6.69 0 0 0 20.95 0z"
        />
        <path
          opacity=".4"
          d="M66.83 22.88a6 6 0 0 0-.83-3.11L57.58 5.05a6.06 6.06 0 0 0-5.28-3.12H35.53a6.06 6.06 0 0 0-5.29 3.12L21.9 19.77a6 6 0 0 0-.83 3.1A6 6 0 0 0 21.9 26l8.35 14.72a6.06 6.06 0 0 0 5.28 3.12H52.3c2.2 0 4.22-1.2 5.3-3.12L65.98 26c.52-.97.84-2 .84-3.11z"
        />
      </g>
    </SvgIcon>
  );
}
