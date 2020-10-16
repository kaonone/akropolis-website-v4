import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

export function Fortmatic(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 35 35">
      <path d="M6 6h23v5.76H11.75V29H6V6z" fill="#617BFF" />
      <path
        d="M23.25 23.24h-5.72v-5.72H29v5.92A5.56 5.56 0 0 1 23.45 29h-.2v-5.76z"
        fill="#617BFF"
      />
    </SvgIcon>
  );
}
