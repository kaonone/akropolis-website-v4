import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { makeStyles } from 'utils/styles';

function CloseIcon(props: React.ComponentProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" classes={{ root: classes.root }}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6.34 6.84l11.32 11.32M6.34 18.16L17.66 6.84" />
        </g>
      </g>
    </SvgIcon>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    opacity: 0.5,

    '&:hover': {
      opacity: 1,
    },
  },
}));

export { CloseIcon };
