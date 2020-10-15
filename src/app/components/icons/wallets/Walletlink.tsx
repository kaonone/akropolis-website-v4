import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Walletlink(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 40 40">
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="#134BDD" />
        <circle cx="20" cy="20" r="14" fill="#FFF" />
        <rect width="10" height="10" x="15" y="15" fill="#154DDF" rx="3" />
      </g>
    </SvgIcon>
  );
}
