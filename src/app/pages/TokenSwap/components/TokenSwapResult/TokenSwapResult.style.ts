import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},

  text: {
    fontSize: 20,
    lineHeight: 1.29,
    letterSpacing: 0.1,
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      fontSize: 27,
      lineHeight: 1.56,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 33,
    },
  },

  tokensAmount: {
    composes: '$text',
    marginBottom: 24,
  },

  error: {
    composes: '$text',
    maxWidth: theme.extra.sizes.maxContentWidth,
    marginBottom: 24,
  },

  button: {
    padding: `0 32px`,
  },
}));
