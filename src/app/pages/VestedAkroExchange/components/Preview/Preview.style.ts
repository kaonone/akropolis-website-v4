import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    backgroundColor: '#212131',
    padding: '1.875rem',
    width: '100%',
    maxWidth: '30.5rem',
    marginBottom: '3.125rem',
    minHeight: '14.874rem',

    [theme.breakpoints.up('tabletXS')]: {
      marginRight: '3.125rem',
    },

    [theme.breakpoints.up('desktopXS')]: {
      marginBottom: 0,
    },
  },
  description: {
    marginBottom: '1.875rem',
    width: '100%',

    [theme.breakpoints.up('mobileMD')]: {
      width: '80%',
    },
  },
  akro: {
    paddingTop: 15,
    width: '8.43rem',
    height: '9.06rem',
    display: 'none',

    [theme.breakpoints.up('mobileMD')]: {
      display: 'block',
    },
  },
}));
