// tslint:disable: max-line-length
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { GetProps } from '_helpers';
import { makeStyles, useTheme } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    width: 'unset',
  },
});

function DelphiTextLogo(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 130 21">
      <defs>
        <linearGradient id="DelphiTextLogo-gradient" x1="0%" x2="100%" y1="50%" y2="50%">
          {theme.gradients.dcaText.points.map(({ offset, color }, index) => (
            <stop key={index} offset={offset} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(-243 -192)">
        <path
          fill="url(#DelphiTextLogo-gradient)"
          d="M249.95 212.24c1.68 0 3.13-.23 4.36-.7a7.6 7.6 0 0 0 4.8-5.38c.37-1.31.56-2.82.56-4.52 0-3.25-.84-5.67-2.52-7.26-1.68-1.59-4.09-2.38-7.2-2.38H243v20.24h6.95zm.22-2.27h-4.48v-15.7h4.54c1.25 0 2.3.17 3.15.52.85.35 1.54.86 2.08 1.53s.93 1.49 1.16 2.44c.24.96.36 2.04.36 3.25 0 1.24-.13 2.3-.39 3.19s-.58 1.6-.97 2.2c-.4.58-.85 1.04-1.35 1.38a6.56 6.56 0 0 1-2.96 1.12c-.46.05-.83.07-1.14.07zm33.78 2.27v-2.27h-11.37v-7h10.52v-2.27h-10.52v-6.43h11.29V192h-13.98v20.24h14.06zm23.6 0v-2.27h-10.72V192h-2.69v20.24h13.41zm11.98 0v-8.28h6.18c2.04.02 3.58-.5 4.63-1.56 1.05-1.05 1.58-2.53 1.58-4.42 0-1.89-.53-3.36-1.58-4.4-1.05-1.06-2.6-1.58-4.63-1.58h-8.88v20.24h2.7zm5.27-10.54h-5.27v-7.43h5.27c1.53 0 2.65.31 3.36.95.7.63 1.06 1.55 1.06 2.76 0 1.21-.35 2.14-1.06 2.78-.71.64-1.83.95-3.36.94zm20.03 10.54v-9.27h10.66v9.27h2.69V192h-2.7v8.7h-10.65V192h-2.7v20.24h2.7zm27.5 0V192h-2.68v20.24h2.69z"
        />
      </g>
    </SvgIcon>
  );
}

export { DelphiTextLogo };
