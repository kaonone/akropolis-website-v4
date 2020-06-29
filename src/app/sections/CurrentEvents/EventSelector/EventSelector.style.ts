import { rule } from 'shared/helpers/style';
import { withStyles, Theme, WithStyles } from 'shared/styles';

const styles = (theme: Theme) => ({
  event: rule({
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),

    '&$selected': {
      opacity: 1,
    },
  }),

  title: rule({
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    lineHeight: 1.71,
    color: '#000',
    cursor: 'pointer',

    [theme.breakpoints.up('md')]: {
      fontSize: 18,
      lineHeight: 1.56,
    },
  }),

  subtitle: rule({
    fontSize: 12,
    lineHeight: 2,
    color: '#9b9b9b',

    [theme.breakpoints.up('md')]: {
      fontSize: 14,
    },
  }),

  selected: {},
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
