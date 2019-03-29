import { IMenuItem } from 'shared/types/common';
import routes from 'modules/routes';

export const menuItems: IMenuItem[] = [
  {
    path: '/',
    title: 'Products',
    scrollTo: 'products',
  },
  {
    path: routes.company.getRoutePath(),
    title: 'Company',
  },
  {
    path: 'https://wiki.akropolis.io',
    title: 'Wiki',
    isExternal: true,
  },
  {
    path: routes.events.getRoutePath(),
    title: 'Events',
  },
  {
    path: 'https://medium.com/akropolis',
    title: 'Blog',
    isExternal: true,
  },
];
