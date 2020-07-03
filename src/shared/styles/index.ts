import { hexToRgb } from '@material-ui/core/styles';

// tslint:disable-next-line: import-blacklist
export { PaletteType } from '@material-ui/core';
export { CSSProperties, StyleRules } from '@material-ui/styles';
export { withStyles, Theme, WithStyles, useTheme, makeStyles } from '@material-ui/core/styles';

export * from './getGrid';

export function rgba(hex: string, alfa: number) {
  const rgb = hexToRgb(hex).replace(/^rgb\((.+?)\)$/, '$1');

  return `rgba(${rgb}, ${alfa})`;
}
