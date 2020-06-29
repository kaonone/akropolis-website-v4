import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = () => ({
  root: rule({
    flexDirection: 'column',
    width: '66px',
    height: '70px',
    borderRadius: '6px',
    backgroundColor: '#eff1f5',

    '&:hover, &$focusVisible': {
      backgroundColor: '#e7eefd',
    },

    '&$selected': {
      backgroundImage: 'linear-gradient(to left, #544cf2, #d93cef)',

      '& $day': {
        color: '#fff',
      },

      '& $month': {
        color: '#fff',
        opacity: 0.5,
      },
    },
  }),

  day: rule({
    fontWeight: 300,
    fontSize: 30,
    lineHeight: '30px',
    color: '#090909',
  }),

  month: rule({
    marginTop: '4px',
    fontSize: 12,
    lineHeight: '16px',
    color: '#97979A',
  }),

  focusVisible: {},
  selected: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
