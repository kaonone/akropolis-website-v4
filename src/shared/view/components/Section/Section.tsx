import * as React from 'react';

import { StylesProps, provideStyles } from './Section.style';

interface IProps {
  title?: string;
  children: React.ReactNode;
}

function Section(props: IProps & StylesProps) {
  const { classes, title, children } = props;
  return (
    <section className={classes.root}>
      {title && <h2 className={classes.title}>{title}</h2>}
      {children}
    </section>
  );
}

export default provideStyles(Section);
