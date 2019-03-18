import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const borderRadius = 5;

const styles = (theme: Theme) => ({
  root: rule({
    position: 'relative',
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
    borderRadius,
    webkitFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
  }),

  image: rule({
    display: 'block',
    borderRadius,
    overflow: 'hidden',
  }),

  curtain: rule({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '50%',
    backgroundImage: 'linear-gradient(to bottom, #b46fd7, #0674c5)',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    opacity: 0.5,
  }),

  content: rule({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2.5,
    width: '50%',
    color: '#fff',
  }),

  title: rule({
    objectFit: 'contain',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontFamily: theme.extra.typography.primaryFont,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 'auto',

    [theme.breakpoints.up('lg')]: {
      fontSize: 26,
    },
  }),

  location: rule({
    objectFit: 'contain',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    flexShrink: 0,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    lineHeight: 2,
    fontWeight: 'bold',
    textTransform: 'uppercase',

    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
  }),

  date: rule({
    objectFit: 'contain',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    flexShrink: 0,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    fontWeight: 'bold',

    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
    },
  }),

  withPointer: rule({}),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
