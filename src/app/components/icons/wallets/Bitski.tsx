// tslint:disable:max-line-length
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Bitski(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 35 35">
      <path
        d="M6.57 19.8l-.4.4a1.04 1.04 0 0 0-.02 1.47l9.7 9.7c.4.4 1.05.4 1.46-.02l.41-.4c.41-.41.42-1.07.01-1.48l-9.69-9.69c-.4-.4-1.06-.4-1.47.01z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.62 12.07l4.83-4.83c3.2-3.2 6.82-2.99 9.63-.18.4.43.75.9 1.07 1.39l.27.36c.17.17.36.22.74.1a6.23 6.23 0 0 1 6.4 2c2.74 2.74 3 6.45-.54 9.99l-6.79 6.78c-.36.37-.65.34-1-.01l-14.6-14.6c-.35-.35-.37-.64-.01-1zm9.8 2.45l1.16-1.15a1.41 1.41 0 0 0 .48-1.06 1.36 1.36 0 0 0-.48-1.04 1.35 1.35 0 0 0-1.04-.47 1.4 1.4 0 0 0-1.06.47l-1.15 1.15c-.36.37-.34.65.02 1.01l1.07 1.07c.36.37.65.39 1.01.02zm5.45 5.45l3.04-3.05c.88-.88 1.07-1.7.34-2.43-.72-.72-1.55-.56-2.44.34l-3.04 3.04c-.36.36-.34.65.02 1l1.07 1.07c.36.37.65.39 1.01.03z"
        fill="#2926CF"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="8.38"
          y1="20.28"
          x2="5.79"
          y2="23.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF0BC3" />
          <stop offset="1" stopColor="#FF3568" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
