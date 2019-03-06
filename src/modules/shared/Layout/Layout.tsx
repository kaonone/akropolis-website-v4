import React from 'react';
import block from 'bem-cn';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import LayoutHeaderMenu, { IHeaderMenuItem } from './LayoutHeaderMenu/LayoutHeaderMenu';
import routes from '../../routes';
import './Layout.scss';

type IProps = RouteComponentProps & { children: React.ReactNode };

const b = block('layout');

const menuItems: IHeaderMenuItem[] = [
  {
    path: '/',
    title: 'Products',
    scrollTo: 'products',
  },
  {
    path: 'https://wiki.akropolis.io',
    title: 'Wiki',
    isExternal: true,
  },
  {
    path: routes.company.getRoutePath(),
    title: 'Company',
  },
  {
    path: 'https://medium.com/akropolis',
    title: 'Blog',
    isExternal: true,
  },
];

function Layout(props: IProps) {
  const { children } = props;
  return (
    <div className={b()}>
      <header className={b('header')}>
        <LayoutHeaderMenu menuItems={menuItems} />
      </header>
      <div className={b('content')}>
        {children}
      </div>
      <footer className={b('footer')}>
        Footer
      </footer>
    </div>
  );
}

export default withRouter(Layout);
