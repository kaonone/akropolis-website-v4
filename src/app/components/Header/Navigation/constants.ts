import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://wiki.akropolis.io/roadmap/',
    title: tKeys.modules.navigation.roadmap.getKey(),
    isExternal: true,
  },
];
