// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    width: 'unset',
    height: '1.35em',
  },
});

export function Build(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 43 62">
      <g fill="#FFF" fillRule="evenodd">
        <path
          opacity=".4"
          d="M21.39 15.03c-1.13 0-2.19.26-3.18.85L3.18 24.47A6.18 6.18 0 0 0 0 29.87v17.11c0 2.24 1.21 4.3 3.18 5.4l15.03 8.53c1 .58 2.05.84 3.18.84s2.18-.26 3.18-.84l15.03-8.53a6.18 6.18 0 0 0 3.18-5.4V29.87c0-2.24-1.22-4.3-3.18-5.4l-15.03-8.6c-1-.51-2.06-.84-3.18-.84z"
        />
        <path
          opacity=".4"
          d="M21.39 0c-1.13 0-2.19.26-3.18.85L3.18 9.44A6.18 6.18 0 0 0 0 14.84v17.11c0 2.24 1.21 4.3 3.18 5.4l15.03 8.53c1 .58 2.05.84 3.18.84s2.18-.26 3.18-.84l15.03-8.53a6.18 6.18 0 0 0 3.18-5.4V14.84c0-2.24-1.22-4.3-3.18-5.4L24.57.83C23.57.33 22.5 0 21.39 0z"
        />
      </g>
    </SvgIcon>
  );
}
