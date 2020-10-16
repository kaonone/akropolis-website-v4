import { makeStyles } from 'utils/styles';

export const useStyles = makeStyles(
  _theme => {
    return {
      button: {
        marginTop: '2rem',
      },
      group: {
        marginRight: '3.125rem',
        marginBottom: '1.875rem',
      },
      groupTitle: {
        marginBottom: '1rem',
      },
      groupValue: {
        fontSize: '2rem',
        lineHeight: 1.18,
      },
      groupToken: {
        fontSize: '0.8rem',
      },
      blurred: {
        opacity: 0.5,
      },
    };
  },
  { name: 'VestedAkroDetails' },
);
