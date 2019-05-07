import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181b1f',
    color: '#fff',
    padding: 20,
    height: theme.extra.spacing.headerHeight.xs - theme.extra.spacing.layoutContentSkew.xsHeight,

    [theme.breakpoints.up('md')]: {
      height: theme.extra.spacing.headerHeight.md - theme.extra.spacing.layoutContentSkew.xsHeight,
    },

    [theme.breakpoints.up('lg')]: {
      height: theme.extra.spacing.headerHeight.lg - theme.extra.spacing.layoutContentSkew.lgHeight,
    },

    '&:before': {
      content: '""',
      width: '100%',
      height: theme.extra.spacing.layoutContentSkew.xsHeight,
      position: 'absolute',
      bottom: '100%',
      background: 'linear-gradient(to top left, #181b1f 49%, transparent 51%)',

      [theme.breakpoints.up('lg')]: {
        height: theme.extra.spacing.layoutContentSkew.lgHeight,
      },
    },
  }),

  link: rule({
    display: 'block',
    margin: `0 ${theme.spacing.unit * 3}px`,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    color: 'inherit',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'color .4s ease',

    '&:hover': {
      color: theme.extra.palette.link.hover,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
