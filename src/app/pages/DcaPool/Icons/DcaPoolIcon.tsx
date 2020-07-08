// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, useTheme } from 'shared/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'unset',

    '& stop': {
      '&:nth-child(1)': {
        stopColor: theme.palette.type === 'dark' ? '#4D2C66' : '#FFE3F6',
      },
      '&:nth-child(2)': {
        stopColor: theme.palette.type === 'dark' ? '#2A134A' : '#EDC4ED',
      },
    },

    '& path': {
      mixBlendMode: theme.palette.type === 'dark' ? 'screen' : 'unset',
    },
  },
}));

function DcaPoolIcon(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  const theme = useTheme();

  const gradientStops = React.useMemo(() => theme.gradients.dcaText.points.map(
    ({ offset, color }, index) => <stop key={index} offset={offset} stopColor={color} />,
  ), [theme]);

  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 113 66">
      <defs>
        <linearGradient id="DcaPoolIcon-gradient-a" x1="50%" x2="50%" y1="0%" y2="100%">
          {gradientStops}
        </linearGradient>
        <linearGradient id="DcaPoolIcon-gradient-b" x1="0%" y1="50%" y2="50%">
          {gradientStops}
        </linearGradient>
        <g id="DcaPoolIcon-shape">
          <path
            fill="url(#DcaPoolIcon-gradient-a)"
            d="M30.05 0a8.6 8.6 0 0 0-4.46 1.19L4.47 13.26A8.68 8.68 0 0 0 0 20.85V44.9c0 3.14 1.7 6.04 4.47 7.59l21.12 11.97a8.6 8.6 0 0 0 4.46 1.2 8.6 8.6 0 0 0 4.47-1.2L55.64 52.5a8.7 8.7 0 0 0 4.47-7.6V20.85a8.7 8.7 0 0 0-4.47-7.59L34.52 1.19A9.6 9.6 0 0 0 30.05 0z"
          />
          <path
            fill="url(#DcaPoolIcon-gradient-b)"
            d="M56.45 0A8.6 8.6 0 0 0 52 1.19L30.87 13.26a8.69 8.69 0 0 0-4.47 7.59V44.9c0 3.14 1.7 6.04 4.47 7.59l21.12 11.97a8.6 8.6 0 0 0 4.46 1.2 8.6 8.6 0 0 0 4.47-1.2L82.04 52.5a8.7 8.7 0 0 0 4.47-7.6V20.86a8.7 8.7 0 0 0-4.47-7.59L60.92 1.19A9.6 9.6 0 0 0 56.45 0z"
          />
          <path
            fill="url(#DcaPoolIcon-gradient-a)"
            d="M82.85 0a8.6 8.6 0 0 0-4.46 1.19L57.27 13.26a8.69 8.69 0 0 0-4.47 7.59V44.9c0 3.14 1.7 6.04 4.47 7.59l21.12 11.97a8.6 8.6 0 0 0 4.46 1.2 8.6 8.6 0 0 0 4.47-1.2l21.12-11.97a8.7 8.7 0 0 0 4.47-7.6V20.86a8.7 8.7 0 0 0-4.47-7.59L87.32 1.19A9.6 9.6 0 0 0 82.85 0z"
          />
        </g>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <use xlinkHref="#DcaPoolIcon-shape" />
        <use xlinkHref="#DcaPoolIcon-shape" />
      </g>
    </SvgIcon>
  );
}

export { DcaPoolIcon };
