import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    flexDirection: 'column',
    width: '66px',
    height: '70px',
    borderRadius: '6px',
    backgroundColor: theme.palette.type === 'dark' ? '#3f3d4c' : '#eff1f5',
    transition: theme.transitions.create('background-color'),

    '&:hover, &$focusVisible': {
      backgroundColor: theme.palette.type === 'dark' ? '#5C5973' : '#e7eefd',
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
    color: theme.palette.text.primary,
  }),

  month: rule({
    marginTop: '4px',
    fontSize: 12,
    lineHeight: '16px',
    color: theme.palette.text.secondary,
  }),

  focusVisible: {},
  selected: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
