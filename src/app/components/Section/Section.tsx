import * as React from 'react';
import cn from 'classnames';

import { useStyles } from './Section.style';
import { Typography } from 'shared/view/elements';

interface IProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section(props: IProps) {
  const { title, children, className } = props;
  const classes = useStyles();
  return (
    <section className={cn(className, classes.root)}>
      {title && (
        <Typography variant="h2" className={classes.title}>
          {title}
        </Typography>
      )}
      {children}
    </section>
  );
}
