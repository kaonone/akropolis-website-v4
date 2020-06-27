// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    width: 'unset',
  },
});

export function Coinlist(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 72 8">
      <path
        d="M11.71.92a.27.27 0 0 0-.26.26v5.13c0 .14.12.26.27.26h4.9c.15 0 .27-.12.27-.27V1.18a.27.27 0 0 0-.27-.27h-4.9zm4.91 6.5h-4.9c-.62 0-1.12-.5-1.12-1.11V1.17c0-.62.5-1.12 1.12-1.12h4.9c.62 0 1.12.5 1.12 1.12V6.3c0 .62-.5 1.12-1.12 1.12zm43.46.02h-5.15v-.86h5.15c.15 0 .27-.12.27-.26V4.39c0-.14-.12-.26-.55-.26h-4.05c-.34 0-.84-.5-.84-1.12V1.2c0-.61.5-1.11 1.12-1.11h4.95v.85h-4.95a.27.27 0 0 0-.27.27V3c0 .15.12.27.27.27h4.05c.62 0 1.12.5 1.12 1.12v1.92c0 .61-.5 1.12-1.12 1.12m-14.88 0h-5.63V.06h.85v6.51h4.78v.85m-11.11 0l-5.3-6.06v6.07h-.85V.07h.86l5.43 6.23V.08h.86v7.35h-1m-11.68 0h.86V.09h-.86zm26.89 0h.86V.07h-.86zM71.7.08H64.85v.85h3v6.5h.86V.94h3V.07M6.36 7.42H1.18c-.62 0-1.12-.5-1.12-1.11V1.17C.06.56.56.06 1.17.06h5.18v.86H1.18a.27.27 0 0 0-.27.26v5.13c0 .14.12.26.26.26h5.18v.85"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
