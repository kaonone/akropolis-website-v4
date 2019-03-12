import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

import youCanBg from './imgs/Sketch-Blue.png';

const styles = (theme: Theme) => ({
  root: rule({
    background: `url(${youCanBg}) no-repeat center ${theme.spacing.unit * 10}px/cover`,

    [theme.breakpoints.up('lg')]: {
      backgroundPositionY: theme.spacing.unit * 12,
    },
  }),

  icon: rule({
    fontSize: 'inherit',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
