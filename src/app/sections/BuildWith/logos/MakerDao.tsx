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

export function MakerDao(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 28 15" preserveAspectRatio="none">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.01.26l10.24 7.8c.32.24.5.62.5 1.02v5.3H10.6V9.54L2.15 3.1v11.28H0V1.28A1.26 1.26 0 0 1 2.01.26zm23.84 0a1.26 1.26 0 0 1 2.01 1.02v13.1h-2.15V3.1l-8.44 6.44v4.84H15.1v-5.3c0-.4.19-.77.5-1.02z"
      />
    </SvgIcon>
  );
}
