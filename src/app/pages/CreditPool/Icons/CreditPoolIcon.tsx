// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'unset',
    '& stop': {
      '&:nth-child(1)': {
        stopColor: theme.palette.type === 'dark' ? '#422C66' : '#E8E4FC',
      },
      '&:nth-child(2)': {
        stopColor: theme.palette.type === 'dark' ? '#1D134A' : '#B2A1FF',
      },
    },

    '& path': {
      mixBlendMode: theme.palette.type === 'dark' ? 'screen' : 'unset',
    },
  },
}));

export function CreditPoolIcon(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 96 66">
      <defs>
        <linearGradient id="CreditPoolIcon-gradient-a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" />
          <stop offset="100%" />
        </linearGradient>
        <linearGradient id="CreditPoolIcon-gradient-b" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" />
          <stop offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <path
          fill="url(#CreditPoolIcon-gradient-a)"
          d="M30.05 0a8.6 8.6 0 0 0-4.46 1.19L4.47 13.26A8.68 8.68 0 0 0 0 20.85V44.9c0 3.14 1.7 6.04 4.47 7.59l21.12 11.97a8.6 8.6 0 0 0 4.46 1.2 8.6 8.6 0 0 0 4.47-1.2L55.64 52.5a8.7 8.7 0 0 0 4.47-7.6V20.85a8.7 8.7 0 0 0-4.47-7.59L34.52 1.19A9.6 9.6 0 0 0 30.05 0z"
        />
        <path
          fill="url(#CreditPoolIcon-gradient-b)"
          d="M95.88 32.83a8.6 8.6 0 0 0-1.19-4.47L82.62 7.24a8.7 8.7 0 0 0-7.59-4.47H50.98a8.7 8.7 0 0 0-7.58 4.47L31.4 28.36a8.6 8.6 0 0 0-1.18 4.47 8.6 8.6 0 0 0 1.19 4.46l11.97 21.12a8.69 8.69 0 0 0 7.6 4.47h24.04a8.7 8.7 0 0 0 7.6-4.47L94.68 37.3a9.6 9.6 0 0 0 1.19-4.46z"
        />
      </g>
    </SvgIcon>
  );
}
