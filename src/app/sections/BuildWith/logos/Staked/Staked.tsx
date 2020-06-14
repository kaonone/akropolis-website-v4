// tslint:disable: max-line-length
import * as React from 'react';
import cn from 'classnames';
import { makeStyles } from 'shared/styles';
import { Picture } from 'shared/view/elements';

const useStyles = makeStyles({
  root: {
    height: '1em',
  },
});

interface Props {
  className?: string;
}

export function Staked({ className }: Props) {
  const classes = useStyles();
  return (
    <Picture
      className={cn(className, classes.root)}
      type="image/png"
      alt="Staked"
      title="Staked"
      fullHeight
      x1={require('./dark/staked@2x.png')}
      x2={require('./dark/staked@3x.png')}
    />
  );
}
