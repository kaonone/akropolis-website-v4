import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
  }),

  icon: rule({
    width: '20%',
    maxWidth: theme.spacing.unit * 20,
    marginRight: theme.spacing.unit * 3,
    flexShrink: 0,

    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing.unit * 7,
    },
  }),

  description: rule({
    margin: 0,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 12,
    lineHeight: 1.5,
    color: theme.extra.colors.rhino,

    [theme.breakpoints.up('md')]: {
      fontSize: 16,
      lineHeight: 1.75,
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 18,
      lineHeight: 1.56,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
