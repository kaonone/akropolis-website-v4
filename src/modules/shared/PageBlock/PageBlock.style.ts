import { withStyles, Theme, WithStyles, StyleRules } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

const hPaddingMultipliers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const styles = (theme: Theme) => ({
  root: rule({
    maxWidth: theme.extra.sizes.maxContentWidth,
    margin: `0 auto`,
    paddingTop: theme.spacing(6),

    '&:last-child': {
      paddingBottom: theme.spacing(6),
    },

    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(8),

      '&:last-child': {
        paddingBottom: theme.spacing(8),
      },
    },
  }),
  ...theme.breakpoints.keys.reduce<StyleRules<{}, string>>((acc, cur) => ({
    ...acc,
    ...generateHorizontalPadding(theme, cur),
  }), {}),
});

function generateHorizontalPadding(theme: Theme, breakpoint: Breakpoint): StyleRules<{}, string> {
  const result: StyleRules<{}, string> = {};
  hPaddingMultipliers.forEach(size => {
    const key = `hPadding-${breakpoint}-${size}`;
    const padding = size * theme.spacing(1);
    const paddingRule = {
      paddingLeft: padding,
      paddingRight: padding,
    };

    result[key] = breakpoint === 'xs' ? paddingRule : {
      [theme.breakpoints.up(breakpoint)]: paddingRule,
    };
  });
  return result;
}

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<StyleRules<{}, string>>;
