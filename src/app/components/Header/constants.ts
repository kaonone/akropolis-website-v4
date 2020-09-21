import { tKeys } from 'services/i18n';
import { IMenuItem } from 'shared/types/common';

export const menuItems: IMenuItem[] = [
  {
    path: 'https://wiki.akropolis.io',
    title: tKeys.modules.navigation.wiki.getKey(),
    isExternal: true,
  },
  {
    path: 'https://www.notion.so/b390a85d87124796b0b008b20e6ab38e?v=387bc54a16e34bf2b8f7328b839eebc2',
    title: tKeys.modules.navigation.roadmap.getKey(),
    isExternal: true,
  },
];
