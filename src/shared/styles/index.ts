import { hexToRgb } from '@material-ui/core/styles';

export * from './getGrid';
export { CSSProperties, StyleRules } from '@material-ui/styles';
export { withStyles, Theme, WithStyles, useTheme, makeStyles } from '@material-ui/core/styles';

export function rgba(hex: string, alfa: number) {
  const rgb = hexToRgb(hex).replace(/^rgb\((.+?)\)$/, '$1');

  return `rgba(${rgb}, ${alfa})`;
}
