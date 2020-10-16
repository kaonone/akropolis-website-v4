import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://www.notion.so/ebefe159cd2d4b7ea772064d32d1926e?v=d7080d7740174f28a7b72c39a6fb7fa3',
    title: tKeys.modules.navigation.roadmap.getKey(),
    isExternal: true,
  },
];
