import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const radius = 6;

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    borderRadius: radius,
    boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.2)',
  }),

  header: rule({
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 1.5}px`,
    minHeight: theme.spacing.unit * 10,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    backgroundImage: 'linear-gradient(to bottom, #b46fd7, #0674c5)',
  }),

  preview: rule({
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
