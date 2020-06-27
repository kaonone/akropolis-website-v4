// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Ethereum(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 30 30">
      <g fill="none">
        <circle cx="15" cy="15" r="15" fill="#627EEA" />
        <g fill="#FFF">
          <path fillOpacity=".6" d="M15.47 3.75v8.32l7.03 3.14z" />
          <path d="M15.47 3.75L8.44 15.21l7.03-3.14z" />
          <path fillOpacity=".6" d="M15.47 20.6v5.64l7.03-9.72z" />
          <path d="M15.47 26.25v-5.66l-7.03-4.07z" />
          <path fillOpacity=".2" d="M15.47 19.29l7.03-4.08-7.03-3.14z" />
          <path fillOpacity=".6" d="M8.44 15.2l7.03 4.09v-7.22z" />
        </g>
      </g>
    </SvgIcon>
  );
}
