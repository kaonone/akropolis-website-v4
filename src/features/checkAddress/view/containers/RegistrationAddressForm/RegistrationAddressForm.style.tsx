import { makeStyles } from 'shared/styles';
export const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: 50,

    '&:first-child': {
      padding: 50,
    },
  },

  captcha: {
    margin: theme.spacing(2, 0),
  },
}));
