import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://www.notion.so/d6f645ed6e1f4044b4b8777cb96ed433',
    title: tKeys.modules.navigation.roadmap.getKey(),
    isExternal: true,
  },
];
