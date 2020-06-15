import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '&$gradient': {
      color: theme.extra.colors.white,
      marginBottom: 'auto',
      alignSelf: 'center',
      textTransform: 'none',
      fontWeight: 400,
      background: theme.gradients.main.linear('to right'),

      lineHeight: 1,
      padding: theme.spacing(0.5, 1.25),
      fontSize: theme.spacing(1.5),
      minWidth: theme.spacing(5.5),
      minHeight: theme.spacing(2.5),
      borderRadius: theme.spacing(1.25),

      [theme.breakpoints.up('tabletXS')]: {
        padding: theme.spacing(1.25, 2.25),
        fontSize: theme.spacing(2),
        minHeight: theme.spacing(4.5),
        minWidth: theme.spacing(8.25),
        borderRadius: theme.spacing(2.25),
      },

      '&$sizeLarge': {
        minHeight: theme.spacing(4.5),
        minWidth: theme.spacing(10),
        borderRadius: theme.spacing(2.25),
        [theme.breakpoints.up('tabletXS')]: {
          fontSize: theme.spacing(2.5),
          minHeight: theme.spacing(6),
          borderRadius: theme.spacing(3),
        },
      },

      '&$disabled': {
        background: `rgba(0, 0, 0, 0.12)`,
      },
    },
  },

  gradient: {},
  disabled: {},
  sizeLarge: {},
}));
