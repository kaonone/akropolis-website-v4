import React from 'react';
import cn from 'classnames';
import { AncestorBackgroundHackProvider, useTheme } from '@akropolis-web/styles';

import { AkropolisSocialLinks } from 'shared/view/components';
import { attachStaticFields } from 'shared/helpers/object';
import { Adaptive } from 'services/adaptability';

import { useStyles } from './Layout.style';
import { TopWave, BottomWave } from './waves';

interface IOwnProps {
  children: React.ReactNode;
}

type IProps = IOwnProps;

function LayoutComponent({ children }: IProps) {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
}

function WrapTopWave({ type, children }: { type: 'top' | 'bottom'; children: React.ReactNode }) {
  const classes = useStyles();
  const wave = {
    top: <TopWave className={cn(classes.wave, classes[type])} />,
    bottom: <BottomWave className={cn(classes.wave, classes[type])} />,
  }[type];

  return (
    <div className={cn(classes.withWave, classes[type])}>
      <div className={classes.waveContainer}>
        {type === 'top' && <div className={classes.waveStrut} />}
        {wave}
        {type === 'bottom' && <div className={classes.waveStrut} />}
      </div>
      {children}
    </div>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Header({ children, className }: ContainerProps) {
  const classes = useStyles();
  return <div className={cn(className, classes.container, classes.header)}>{children}</div>;
}

function Socials({ className }: Omit<ContainerProps, 'children'>) {
  const classes = useStyles();
  return (
    <div className={cn(className, classes.socials)}>
      <Adaptive to="tabletXS">
        <AkropolisSocialLinks direction="row" />
      </Adaptive>
      <Adaptive from="tabletXS">
        <AkropolisSocialLinks direction="column" />
      </Adaptive>
    </div>
  );
}

function Container({ children, className }: ContainerProps) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <AncestorBackgroundHackProvider backgroundColor={theme.palette.background.default}>
      <div className={cn(className, classes.container)}>{children}</div>
    </AncestorBackgroundHackProvider>
  );
}

function Footer({ children, className }: ContainerProps) {
  const classes = useStyles();
  return <div className={cn(className, classes.container, classes.footer)}>{children}</div>;
}

export const Layout = attachStaticFields(LayoutComponent, {
  Header,
  Socials,
  Container,
  Footer,
  WrapTopWave,
});
