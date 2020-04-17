import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { StylesProps, provideStyles } from './Preloader.style';

interface IProps {
  isShown: boolean;
  size?: number;
  backgroundColor?: string;
}

function Preloader(props: IProps & StylesProps) {
  const { isShown, size, backgroundColor, classes } = props;
  return isShown ? (
    <div className={classes.root} style={{ backgroundColor }}>
      <CircularProgress size={size} />
    </div>
  ) : null;
}

export default provideStyles(Preloader);
