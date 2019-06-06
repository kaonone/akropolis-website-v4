import routes from 'modules/routes';
import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: '/',
    title: tKeys.modules.navigation.products.getKey(),
    scrollTo: 'products',
  },
  {
    path: routes.company.getRoutePath(),
    title: tKeys.modules.navigation.company.getKey(),
  },
  {
    path: routes.quest.getRoutePath(),
    title: tKeys.modules.navigation.quest.getKey(),
  },
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://wiki.akropolis.io/whitepaper/',
    title: tKeys.modules.navigation.whitepaper.getKey(),
    isExternal: true,
  },
  {
    path: 'https://medium.com/akropolis',
    title: tKeys.modules.navigation.blog.getKey(),
    isExternal: true,
  },
];
