import { StyleRules, Theme } from '@akropolis-web/styles';

export function getAdaptiveFontSize(theme: Theme): StyleRules[''] {
  return {
    fontSize: 13,
    [theme.breakpoints.up(767)]: {
      // breakpoint tabletXS-1
      fontSize: 12,
    },
  };
}
