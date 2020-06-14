import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},

  title: {
    fontWeight: 300,

    fontSize: theme.spacing(2.25),
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('tabletXS')]: {
      fontSize: theme.spacing(3.75),
    },
  },
}));
