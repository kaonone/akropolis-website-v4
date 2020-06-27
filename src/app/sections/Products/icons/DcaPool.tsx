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

export function DcaPool(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 79 46">
      <g fill="#FFF" fillRule="evenodd">
        <path
          opacity=".4"
          d="M20.95 0c-1.1 0-2.14.26-3.12.83L3.11 9.24A6.06 6.06 0 0 0 0 14.53v16.76a6.06 6.06 0 0 0 3.11 5.29l14.72 8.35a6 6 0 0 0 3.12.83c1.1 0 2.14-.26 3.1-.83l14.73-8.35a6.06 6.06 0 0 0 3.11-5.29V14.53a6.06 6.06 0 0 0-3.11-5.29L24.06.83A6.69 6.69 0 0 0 20.95 0z"
        />
        <path
          opacity=".4"
          d="M39.35 0c-1.1 0-2.14.26-3.12.83L21.51 9.24a6.06 6.06 0 0 0-3.11 5.29v16.76a6.06 6.06 0 0 0 3.11 5.29l14.72 8.35a6 6 0 0 0 3.12.83c1.1 0 2.14-.26 3.1-.83l14.73-8.35a6.06 6.06 0 0 0 3.11-5.29V14.53a6.06 6.06 0 0 0-3.11-5.29L42.46.83A6.69 6.69 0 0 0 39.34 0z"
        />
        <path
          opacity=".4"
          d="M57.75 0c-1.1 0-2.14.26-3.12.83L39.91 9.24a6.06 6.06 0 0 0-3.11 5.29v16.76a6.06 6.06 0 0 0 3.11 5.29l14.72 8.35a6 6 0 0 0 3.12.83c1.1 0 2.14-.26 3.1-.83l14.73-8.35a6.06 6.06 0 0 0 3.11-5.29V14.53a6.06 6.06 0 0 0-3.11-5.29L60.86.83A6.69 6.69 0 0 0 57.74 0z"
        />
      </g>
    </SvgIcon>
  );
}
