import React from 'react';
import cn from 'classnames';

import { AkropolisSocialLinks } from 'shared/view/components';
import { useStyles } from './Layout.style';
import { attachStaticFields } from 'shared/helpers/object';
import { TopWave, BottomWave } from './waves';

interface IOwnProps {
  children: React.ReactNode;
}

type IProps = IOwnProps;

function LayoutComponent({ children }: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <div className={classes.socials}>
        <AkropolisSocialLinks direction="column" />
      </div>
    </div>
  );
}

function WrapTopWave({ type, children }: { type: 'top' | 'bottom'; children: React.ReactNode }) {
  const classes = useStyles();
  const wave = {
    top: <TopWave className={classes.wave} />,
    bottom: <BottomWave className={classes.wave} />,
  }[type];

  return (
    <div className={cn(classes.waveContainer, classes[type])}>
      {wave}
      {children}
    </div>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  return <div className={cn(classes.container, classes.header)}>{children}</div>;
}

function Container({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  return <div className={cn(classes.container)}>{children}</div>;
}

function Footer({ children }: { children: React.ReactNode }) {
  const classes = useStyles();
  return <div className={cn(classes.container, classes.footer)}>{children}</div>;
}

export const Layout = attachStaticFields(LayoutComponent, { Header, Container, Footer, WrapTopWave });
