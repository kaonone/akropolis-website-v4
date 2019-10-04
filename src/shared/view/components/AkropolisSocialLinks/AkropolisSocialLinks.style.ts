import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

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
    '& path': {
      fill: 'currentColor',
    },
  }),

  row: {},
  column: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
