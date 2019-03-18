export type AnchorName = 'products' | 'events';

export interface IMenuItem {
  path: string;
  title: string;
  isExternal?: boolean;
  scrollTo?: AnchorName;
  disabled?: boolean;
}
