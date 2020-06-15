// tslint:disable: max-line-length
import * as React from 'react';
import cn from 'classnames';
import { makeStyles, useTheme } from 'shared/styles';
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
  const theme = useTheme();

  const url = theme.palette.type === 'light' ? require('./staked_light@6x.png') : require('./staked_dark@6x.png');

  return (
    <Picture className={cn(className, classes.root)} type="image/png" alt="Staked" title="Staked" fullHeight x1={url} />
  );
}
