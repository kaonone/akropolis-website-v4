// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Web3(props: GetProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd">
        <circle cx="15" cy="15" r="15" fill="#191B1F" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M20.25 11.57v-1.44c0-.53-.32-.99-.8-1.2L10.5 5.25v.8l7.98 3.29c.28.1.28.5 0 .61l-7.98 3.29v3.2l4.8-1.98 3.17 1.3c.28.11.28.5 0 .62l-7.97 3.28v5.09l8.95-3.68c.48-.2.8-.67.8-1.2v-3.3c0-.53-.32-1-.8-1.2l-3.17-1.3 3.17-1.3c.48-.2.8-.68.8-1.2z"
        />
      </g>
    </SvgIcon>
  );
}
