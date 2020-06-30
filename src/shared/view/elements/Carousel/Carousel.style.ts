import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    position: 'relative',
  }),

  arrowPagination: rule({
    position: 'absolute',
    top: 0,
    bottom: 0,
    padding: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    cursor: 'pointer',

    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3),
    },

    '&$left': {
      right: '100%',
      transform: 'scale(-1)',
    },

    '&$right': {
      left: '100%',
    },
  }),

  arrowIcon: rule({
    fontSize: 48,
    color: '#e8e8e8',
  }),

  dotsPagination: rule({
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  }),

  dotWrapper: rule({
    padding: theme.spacing(0.75),
    cursor: 'pointer',
  }),

  dot: rule({
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '50%',
    backgroundColor: '#d8d8d8',

    '&$active': {
      backgroundColor: '#9b9b9b',
    },
  }),

  active: {},
  left: {},
  right: {},
});

export const provideStyles = withStyles(styles, { withTheme: true });

export type StylesProps = WithStyles<typeof styles>;
