import { withStyles as muiWithStyles } from '@material-ui/core/styles';
import { withStyles, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = () => ({
  root: rule({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
});

// TODO ds: rewrite after transition to @material-ui/styles
export const provideStyles = (muiWithStyles as typeof withStyles)(styles);

export type StylesProps = WithStyles<typeof styles>;
