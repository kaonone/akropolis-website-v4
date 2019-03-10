import { IMenuItem } from 'shared/types/common';
import routes from 'modules/routes';

export const menuItems: IMenuItem[] = [
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
