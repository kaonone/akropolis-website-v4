// tslint:disable: max-line-length
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { GetProps } from '_helpers';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    width: 'unset',
  },
});

function DcaPoolLogo(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 133 40">
      <defs>
        <linearGradient id="DcaPoolLogo-gradient" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stop-color="#544CF2" />
          <stop offset="100%" stop-color="#D93CEF" />
        </linearGradient>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <text
          fill="url(#DcaPoolLogo-gradient)"
          font-family="HelveticaNeue-Medium, Helvetica Neue"
          font-size="18"
          font-weight="400"
          letter-spacing="4.4"
        >
          <tspan x="47" y="27">
            DELPHI
          </tspan>
        </text>
        <path
          fill="url(#DcaPoolLogo-gradient)"
          d="M18.2 0c1 0 1.8.3 2.7.7L33.6 8c1.7 1 2.7 2.7 2.7 4.6v14.5c0 2-1 3.7-2.7 4.6L21 39c-.9.5-1.8.7-2.7.7-1 0-1.9-.2-2.7-.7L2.7 31.7A5.3 5.3 0 010 27.1V12.6C0 10.7 1 8.9 2.7 8L15.5.7c.8-.5 1.7-.7 2.7-.7zm0 1.7c-.7 0-1.3.2-1.8.5L3.5 9.4a3.7 3.7 0 00-1.8 3.2v14.5c0 1.3.7 2.5 1.8 3.1l12.8 7.3a3.7 3.7 0 003.7 0l12.8-7.2a3.7 3.7 0 001.8-3.2V12.6c0-1.3-.7-2.5-1.8-3.1L20 2.2c-.5-.3-1.2-.5-1.8-.5zm0 4.8c.5 0 1 .1 1.4.5l9.2 5.2c.9.5 1.5 1.4 1.5 2.4V25c0 1-.6 2-1.5 2.5l-9.2 5.2c-.4.3-1 .4-1.4.4-.5 0-1-.1-1.5-.4l-9.2-5.2A2.8 2.8 0 016.1 25V14.6c0-1 .5-2 1.4-2.5l9.2-5.2c.5-.3 1-.4 1.5-.4zm0 1.5c-.3 0-.5 0-.8.2l-9 5.2c-.5.3-.8.7-.8 1.2v10.5c0 .5.3 1 .7 1.3l9.2 5.2.7.2.8-.2 9.1-5.2c.5-.3.7-.8.8-1.3V14.6c0-.5-.3-1-.8-1.2L19 8.2c-.2-.2-.5-.2-.7-.2zm0 5c.2 0 .5.1.7.3l4.7 2.6c.5.3.7.8.8 1.3v5.4c0 .5-.3 1-.8 1.2L19 26.5l-.7.2-.8-.2-4.7-2.7c-.4-.3-.7-.8-.7-1.2v-5.4c0-.6.3-1 .7-1.3l4.7-2.6c.3-.2.5-.3.8-.3zm0 1.4L13.3 17v5.5l4.7 2.8 4.8-2.7.1-5.5-4.8-2.7z"
        />
      </g>
    </SvgIcon>
  );
}

export { DcaPoolLogo };
