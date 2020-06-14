// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    height: '1.4em',
    width: 'unset',
  },
});

export function TheGraph(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 21 26" preserveAspectRatio="none">
      <path
        fill="currentColor"
        d="M8.91 14.44a5.86 5.86 0 0 1-5.94-5.77c0-3.2 2.66-5.78 5.94-5.78a5.86 5.86 0 0 1 5.94 5.78 5.86 5.86 0 0 1-5.94 5.77M8.9 0a8.8 8.8 0 0 1 8.91 8.67c0 4.78-3.99 8.66-8.91 8.66S0 13.45 0 8.67A8.8 8.8 0 0 1 8.91 0zm8.47 17.76c.58.56.58 1.47 0 2.04l-5.94 5.78c-.58.56-1.52.56-2.1 0a1.42 1.42 0 0 1 0-2.05l5.94-5.77a1.51 1.51 0 0 1 2.1 0zm3.4-16.32c0 .8-.66 1.45-1.48 1.45s-1.48-.65-1.48-1.45c0-.8.66-1.44 1.48-1.44s1.49.65 1.49 1.44z"
      />
    </SvgIcon>
  );
}
