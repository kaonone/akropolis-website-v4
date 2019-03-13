import * as React from 'react';

import { StylesProps, provideStyles } from './Section.style';

interface IProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

function Section(props: IProps & StylesProps) {
  const { classes, title, subtitle, children } = props;
  return (
    <section className={classes.root}>
      {title && <h2 className={classes.title}>{title}</h2>}
      {subtitle && <div className={classes.subtitle}>{subtitle}</div>}
      {children}
    </section>
  );
}

export default provideStyles(Section);
