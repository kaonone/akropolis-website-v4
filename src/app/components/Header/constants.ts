import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://www.notion.so/576a82c59fe74b9d9a9df5a7f47cc11d',
    title: tKeys.modules.navigation.roadmap.getKey(),
    isExternal: true,
  },
];
