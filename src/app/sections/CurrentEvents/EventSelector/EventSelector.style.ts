import { rule } from 'shared/helpers/style';
import { withStyles, Theme, WithStyles } from 'shared/styles';

const styles = (theme: Theme) => ({
  item: rule({
    fontFamily: theme.palette.text.primary,
  }),

  title: rule({
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    lineHeight: 1.2,
    marginBottom: 10,

    '&:hover': {
      textDecoration: 'none',
    },
  }),

  subtitle: rule({
    fontSize: 12,
    opacity: 0.5,

    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  }),

  selected: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
