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
      height: theme.spacing.unit * 3,
      position: 'absolute',
      zIndex: 1,

      [theme.breakpoints.up('lg')]: {
        height: theme.spacing.unit * 4,
      },
    },

    '&:before': {
      bottom: '100%',
      background: 'linear-gradient(to top left, #fff 49%, transparent 51%)',
    },

    '&:after': {
      top: '100%',
      background: 'linear-gradient(to bottom right, #fff 49%, transparent 51%)',
    },
  }),

  footer: rule({}),

  isAbsolute: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
