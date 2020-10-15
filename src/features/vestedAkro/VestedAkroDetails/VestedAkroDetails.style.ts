import { makeStyles } from 'utils/styles';

export const useStyles = makeStyles(
  _theme => {
    return {
      button: {
        marginTop: '2rem',
      },
      group: {
        marginRight: 50,
      },
      groupTitle: {
        marginBottom: 15,
      },
      groupValue: {
        fontSize: 32,
        lineHeight: 1.18,
      },
      groupToken: {
        fontSize: 12,
      },
      blurred: {
        opacity: 0.5,
      },
    };
  },
  { name: 'VestedAkroDetails' },
);
