import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { CSSProperties } from '@material-ui/styles/withStyles';
import { Theme } from '@material-ui/core/styles';

interface BreakpointConfig {
  breakpoint: Breakpoint;
  vPadding: number;
  hPadding: number;
  count: number;
}

type StyleRules = CSSProperties & Record<Exclude<string, keyof CSSProperties>, CSSProperties>;

export function getGrid(
  theme: Theme,
  configs: BreakpointConfig[],
  styles: {
    container?: StyleRules;
    item?: StyleRules;
  } = {},
): {
  container: StyleRules;
  item: StyleRules;
} {
  const { container = {}, item = {} } = styles;

  return {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      ...configs.reduce<StyleRules>(
        (acc, { breakpoint, hPadding, vPadding }) => ({
          ...acc,
          [theme.breakpoints.up(breakpoint)]: {
            ...container[theme.breakpoints.up(breakpoint)],
            width: `calc(100% + ${hPadding}px)`,
            margin: `${-vPadding / 2}px ${-hPadding / 2}px`,
          },
        }),
        container,
      ),
    },
    item: {
      ...configs.reduce<StyleRules>((acc, { breakpoint, count, hPadding, vPadding }) => {
        const percent = Math.floor((100 * 1000000) / count) / 1000000;
        return {
          ...acc,
          [theme.breakpoints.up(breakpoint)]: {
            ...item[theme.breakpoints.up(breakpoint)],
            maxWidth: `${percent}%`,
            flexBasis: `${percent}%`,
            padding: `${vPadding / 2}px ${hPadding / 2}px`,
          },
        };
      }, item),
    },
  };
}
