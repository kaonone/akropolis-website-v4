import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://www.notion.so/akropolis/675c3c2d7f6b44fe8ead0f43f9e79482?v=833c08d791e44053bdf0f442f0adc6f6',
    title: tKeys.modules.navigation.roadmap.getKey(),
    isExternal: true,
  },
];
