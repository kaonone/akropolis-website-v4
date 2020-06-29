import { rule } from 'shared/helpers/style';
import { withStyles, Theme, WithStyles } from 'shared/styles';

const styles = (theme: Theme) => ({
  item: rule({
    fontFamily: theme.extra.typography.primaryFont,
  }),

  title: rule({
    fontSize: '16px',
    fontWeight: 500,
    color: '#090909',
    cursor: 'pointer',
    
    '&:hover': {
      textDecoration: 'none',
    }
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
