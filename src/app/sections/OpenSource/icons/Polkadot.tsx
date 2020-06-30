// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Polkadot(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd">
        <circle cx="15" cy="15" r="15" fill="#D32D79" />
        <path
          d="M14.74 7.5a5.72 5.72 0 0 0-5.44 7.55c.14.4.6.63 1.02.5a.8.8 0 0 0 .5-1.01 4.14 4.14 0 1 1 8.06-1.34 4.13 4.13 0 0 1-3.9 4.1s-.8.04-1.2.1l-.45.08c-.05.01-.1-.03-.08-.08l.14-.66.73-3.4a.8.8 0 0 0-1.55-.32s-1.8 8.28-1.8 8.37c-.1.43.17.85.6.94a.8.8 0 0 0 .94-.6l.26-1.2c.18-.84.88-1.46 1.7-1.56.18-.03.9-.08.9-.08a5.7 5.7 0 1 0-.43-11.4zm2.73 13.11a.97.97 0 0 0-1.14.74.95.95 0 0 0 .75 1.13.95.95 0 0 0 1.14-.74.97.97 0 0 0-.75-1.13z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </SvgIcon>
  );
}
