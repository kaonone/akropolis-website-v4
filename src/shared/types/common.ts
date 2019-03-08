export type AnchorName = 'products';

export interface IMenuItem {
  path: string;
  title: string;
  isExternal?: boolean;
  scrollTo?: AnchorName;
}
