import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
    margin: `0 -${theme.extra.spacing.horizontalPagePaddings.xs.medium / 2}px`,

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      margin: `0 -${theme.extra.spacing.horizontalPagePaddings.md.large / 2}px`,
    },
  }),

  column: rule({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: `0 ${theme.extra.spacing.horizontalPagePaddings.xs.medium / 2}px`,

    [theme.breakpoints.up('md')]: {
      alignItems: 'flex-start',
      margin: `0 ${theme.extra.spacing.horizontalPagePaddings.md.large / 2}px`,
    },
  }),

  link: rule({
    margin: `${theme.spacing(1.5)}px 0`,
    display: 'block',
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    color: 'inherit',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'color .4s ease',

    '&:hover': {
      color: theme.palette.action.hover,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
