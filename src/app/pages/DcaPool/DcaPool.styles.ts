import { makeStyles } from 'shared/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.type === 'light' ? theme.colors.athensGray : theme.colors.shark,
    },
  },

  main: {
    marginTop: 41,
    marginBottom: 90,
  },

  benefits: {
    marginTop: 60,
  },
}));

export { useStyles };
