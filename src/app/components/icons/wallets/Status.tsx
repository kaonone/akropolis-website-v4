// tslint:disable:max-line-length
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Status(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <g fill="none" fillRule="evenodd">
        <path fill="#4360DF" d="M9.99 0A10 10 0 1 0 10 19.99 10 10 0 0 0 9.99 0z" />
        <path
          fill="#FFF"
          d="M10.32 9.56c.5.05 1 .1 1.62.07 1.68-.1 2.69-.95 2.62-2.23-.08-1.3-1.42-2.11-2.77-2.04-2.2.12-3.81 2.05-4 4.26.3-.07.62-.11.92-.13.61-.03 1.11.02 1.62.07zm-4.3 2.86c.07 1.2 1.34 1.93 2.62 1.86 2.08-.11 3.61-1.88 3.78-3.9-.28.06-.58.1-.86.12-.58.03-1.06-.02-1.53-.07-.48-.05-.95-.1-1.54-.06-1.58.08-2.54.87-2.47 2.05z"
        />
      </g>
    </SvgIcon>
  );
}
