import React from 'react';
import cn from 'classnames';

import { AkropolisSocialLinks } from 'shared/view/components';
import { StylesProps, provideStyles } from './Layout.style';

interface IOwnProps {
  withStartBackground?: boolean;
  children: React.ReactNode;
  header?: React.ReactNode;
  intro?: React.ReactNode;
  footer?: React.ReactNode;
}

type IProps = IOwnProps & StylesProps;

function Layout(props: IProps) {
  const { classes } = props;
  const children = React.Children.toArray(props.children);
  const headerContent = getContent(Header, children);
  const introContent = getContent(Intro, children);
  const footerContent = getContent(Footer, children);
  const allowedChildren = filterChildren([Header, Intro, Footer], children);

  return (
    <div className={classes.root}>
      {headerContent && (
        <div className={cn(classes.header, { [classes.isAbsolute]: !!introContent })}>{headerContent}</div>
      )}
      {introContent && <div className={classes.intro}>{introContent}</div>}
      <div className={classes.content}>{allowedChildren}</div>
      {footerContent && <div className={classes.footer}>{footerContent}</div>}
      <div className={classes.socials}><AkropolisSocialLinks direction="column" /></div>
    </div>
  );
}

function filterChildren(
  forbiddenComponents: React.StatelessComponent[], children: React.ReactNode[],
): React.ReactNode[] {
  return children.filter(
    item => !item || !forbiddenComponents.find(
      forbidden => isEqualComponents((item as React.ReactElement<{ children: React.ReactNode }>).type, forbidden),
    ),
  );
}

function getContent(
  component: React.StatelessComponent<{ children: React.ReactNode }>,
  children: React.ReactNode[],
): React.ReactNode {
  const child = children.find(
    (item): item is React.ReactElement<{ children: React.ReactNode }> =>
      Boolean(item && isEqualComponents((item as React.ReactElement<{ children: React.ReactNode }>).type, component)),
  );
  return child && child.props.children;
}

function Header(_props: { children: React.ReactNode }) { return <noscript />; }
function Intro(_props: { children: React.ReactNode }) { return <noscript />; }
function Footer(_props: { children: React.ReactNode }) { return <noscript />; }

function isEqualComponents(a: React.ComponentType | string, b: React.ComponentType | string): boolean {
  function getValue(input: React.ComponentType | string) {
    return input && (
      typeof input === 'string'
        ? input
        : (input.displayName || input.name || input)
    );
  }
  return getValue(a) === getValue(b);
}

const Component = provideStyles(Layout);

interface IResultComponent {
  Header: typeof Header;
  Intro: typeof Intro;
  Footer: typeof Footer;
}

const ResultComponent = Component as typeof Component & IResultComponent;
ResultComponent.Header = Header;
ResultComponent.Intro = Intro;
ResultComponent.Footer = Footer;

export default ResultComponent;
