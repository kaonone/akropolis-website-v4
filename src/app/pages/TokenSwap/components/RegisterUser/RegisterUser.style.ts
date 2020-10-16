import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},

  text: {
    maxWidth: theme.extra.sizes.maxContentWidth,
    fontWeight: 300,
    lineHeight: 1.29,
    letterSpacing: 0.1,
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      fontSize: 22,
      lineHeight: 1.56,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },

  form: {
    marginTop: 16,
    maxWidth: '31.25rem',
  },
}));
