import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    position: 'relative',
    width: theme.spacing.unit * 9,
    height: theme.spacing.unit * 9,
    borderRadius: 6,
    backgroundImage: 'linear-gradient(to bottom, #b46fd7, #0674c5)',

    [theme.breakpoints.up('md')]: {
      width: theme.spacing.unit * 11,
      height: theme.spacing.unit * 11,
    },

    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $backdrop': {
        opacity: 0.5,
      },
    },

    '&$selected': {
      '& $backdrop': {
        opacity: 0,
      },

      '& $content': {
        color: '#fff',
      },
    },
  }),

  backdrop: rule({
    position: 'absolute',
    top: 2,
    right: 2,
    bottom: 2,
    left: 2,
    borderRadius: 4,
    background: '#fff',
    opacity: 1,
    transition: theme.transitions.create('opacity'),
  }),

  content: rule({
    position: 'relative',
    zIndex: 1,
    height: '100%',
    color: '#000',
    transition: theme.transitions.create('color'),
    webkitFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
  }),

  day: rule({
    display: 'block',
    fontFamily: theme.extra.typography.primaryFont,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      fontSize: 40,
    },
  }),

  month: rule({
    display: 'block',
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  }),

  focusVisible: {},
  selected: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
