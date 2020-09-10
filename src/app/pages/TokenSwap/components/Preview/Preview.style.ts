import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},

  text: {
    fontSize: 20,
    fontWeight: 'normal',
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

  description: {
    maxWidth: theme.extra.sizes.maxContentWidth,
    composes: '$text',
    marginBottom: theme.spacing(3),
    fontWeight: 300,
  },

  actions: {
    maxWidth: '31.25rem',
  },
}));
