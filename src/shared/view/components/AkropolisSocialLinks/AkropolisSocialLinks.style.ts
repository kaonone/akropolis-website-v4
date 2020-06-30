import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import { MainSvgGradient } from 'shared/view/elements/Icons';

const styles = (_theme: Theme) => ({
  root: rule({
    display: 'flex',

    '&$row': {
      flexDirection: 'row',
    },

    '&$column': {
      flexDirection: 'column',
    },
  }),

  link: rule({
    color: 'inherit',
  }),

  fillPath: rule({
    '& path, & circle': {
      fill: `url(#${MainSvgGradient.ID})`,
    },
  }),

  hidden: {
    opacity: 1,
    width: 0,
    height: 0,
  },

  row: {},
  column: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
