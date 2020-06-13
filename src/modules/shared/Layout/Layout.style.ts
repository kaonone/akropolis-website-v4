import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  }),

  header: rule({
    '&$isAbsolute': rule({
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: 1,
    }),
  }),

  intro: rule({}),

  content: rule({
    flexGrow: 1,
    position: 'relative',
    backgroundColor: '#fff',

    '&:before, &:after': {
      content: '""',
      width: '100%',
      height: theme.extra.spacing.layoutContentSkew.xsHeight,
      position: 'absolute',

      [theme.breakpoints.up('lg')]: {
        height: theme.extra.spacing.layoutContentSkew.lgHeight,
      },
    },

    '&:before': {
      bottom: '100%',
      background: 'linear-gradient(to top left, #fff 49%, transparent 51%)',
    },

    '&:after': {
      top: `calc(100% - ${theme.extra.spacing.layoutContentSkew.xsHeight}px)`,
      background: `linear-gradient(to bottom right, transparent 49%, ${theme.extra.colors.woodSmoke} 51%)`,

      [theme.breakpoints.up('lg')]: {
        top: `calc(100% - ${theme.extra.spacing.layoutContentSkew.lgHeight}px)`,
      },
    },
  }),

  footer: rule({}),

  socials: rule({
    position: 'fixed',
    display: 'none',
    marginRight: theme.spacing(2),
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    color: theme.extra.colors.amethystSmoke,

    [theme.breakpoints.up('lg')]: {
      display: 'block',
    },
  }),

  isAbsolute: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
