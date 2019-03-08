import React from 'react';
import block from 'bem-cn';
import { bind } from 'decko';
import { Link } from 'react-router-dom';

import { MenuIcon } from 'shared/view/elements';
import { ClickAwayListener } from 'shared/view/components';

import './LayoutHeaderMenu.scss';
import routes from 'modules/routes';
import { IMenuItem } from 'shared/types/common';

interface IState {
  isMenuOpen: boolean;
}

const menuItems: IMenuItem[] = [
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

const b = block('layout-header-menu');

class LayoutHeaderMenu extends React.PureComponent<{}, IState> {
  public state: IState = {
    isMenuOpen: false,
  };

  public render() {
    const { isMenuOpen } = this.state;
    return (
      <div className={b()}>
        <div
          className={b('menu-icon', { open: isMenuOpen })}
          onClick={this.handleMenuClick}
          onTouchEnd={this.handleMenuTouchEnd}
        >
          <MenuIcon />
        </div>
        <span className={b('title')}>Search for:</span>
        <ClickAwayListener
          onClickAway={this.handleMenuItemsClickAway}
          mouseEvent="onClick"
          touchEvent="onTouchEnd"
        >
          <div className={b('menu-items')}>
            {menuItems.map(this.renderMenuItem)}
          </div>
        </ClickAwayListener>
      </div>
    );
  }

  private renderMenuItem({ path, title }: IMenuItem, i: number) {
    return (
      <Link to={path} className={b('menu-item', { active: path === location.pathname })} key={i}>
        {title}
      </Link>
    );
  }

  private toggleMenu(e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    e.preventDefault();
    this.setState((prevState: IState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  }

  @bind
  private handleMenuClick(e: React.MouseEvent<HTMLDivElement>) {
    this.toggleMenu(e);
  }

  @bind
  private handleMenuTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    this.toggleMenu(e);
  }

  @bind
  private handleMenuItemsClickAway() {
    this.setState({ isMenuOpen: false });
  }
}

export { IMenuItem as IHeaderMenuItem };
export default LayoutHeaderMenu;
