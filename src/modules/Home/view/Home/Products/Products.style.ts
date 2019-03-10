import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    flexWrap: 'wrap',
    margin: -theme.extra.spacing.horizontalPagePaddings.xs.small,

    [theme.breakpoints.up('md')]: {
      margin: -theme.extra.spacing.horizontalPagePaddings.md.small,
    },
  }),

  product: rule({
    display: 'flex',
    width: '100%',
    padding: theme.extra.spacing.horizontalPagePaddings.xs.small,

    [theme.breakpoints.up('md')]: {
      width: '50%',
      padding: theme.extra.spacing.horizontalPagePaddings.md.small,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
