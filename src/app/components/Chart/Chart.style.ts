import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => ({
  root: {},

  graphic: {
    height: 200,
  },

  tick: {
    fill: theme.palette.text.primary,
    fontSize: 10,
    fontWeight: 300,
    opacity: 0.5,
  },
}));
