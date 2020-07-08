import { makeStyles } from 'shared/styles';

const useStyles = makeStyles((theme) => ({
  textLogo: {
    fontSize: theme.spacing(2.6),
    marginLeft: theme.spacing(2.5),
  },

  buttons: {
    display: 'flex',
  },

  button: {
    '& + &': {
      marginLeft: 30,
    },
  },

  disclaimer: {
    minWidth: 240,
    fontWeight: 300,
    fontSize: 12,

    marginLeft: theme.spacing(1.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 15,
      marginLeft: theme.spacing(2.5),
    },
  },
}));

export { useStyles };
