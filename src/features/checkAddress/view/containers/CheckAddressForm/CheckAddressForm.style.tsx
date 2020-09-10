import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles(theme => (
  {
    field: {
      marginBottom: theme.spacing(2),
    },

    checkBoxField: {
      marginLeft: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
    },

    captcha: {
      marginBottom: theme.spacing(2),
    },

    submitButton: {
      padding: theme.spacing(0, 4),
    },
  }));
