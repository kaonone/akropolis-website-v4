import * as R from 'ramda';
import { withStyles, WithStyles, Theme, CSSProperties } from 'shared/styles';

import { rule } from 'shared/helpers/style';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

function generateMediaQueries(theme: Theme) {
  const breakpointKeys = Object.keys(theme.breakpoints.values) as Breakpoint[];
  const from = R.mergeAll<Record<string, CSSProperties>>(
    breakpointKeys.map(item => ({
      [`from${item.toUpperCase()}`]: rule({
        '&$root': {
          [theme.breakpoints.down(item)]: {
            display: 'none',
          },
        },
      }),
    })),
  );

  const to = R.mergeAll<Record<string, CSSProperties>>(
    breakpointKeys.map(item => ({
      [`to${item.toUpperCase()}`]: rule({
        '&$root': {
          [theme.breakpoints.up(item)]: {
            display: 'none',
          },
        },
      }),
    })),
  );

  return R.mergeAll<Record<string, CSSProperties>>([from, to]);
}

const styles = (theme: Theme): Record<string, CSSProperties> => ({
  root: {},
  ...generateMediaQueries(theme),
});

export const provideStyles = withStyles(styles, { withTheme: true });

export type StylesProps = WithStyles<typeof styles>;
