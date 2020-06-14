import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },

  item: {
    '&:empty': {
      display: 'none',
    },

    fontSize: theme.spacing(1.5),
    marginRight: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(2),
      marginRight: theme.spacing(6),
    },

    '&:last-child': {
      marginRight: 0,
    },
  },
}));
