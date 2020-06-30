import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'none',
    transformOrigin: 'right',

    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  }),

  link: rule({
    display: 'block',
    marginRight: theme.extra.spacing.horizontalPagePaddings.md.medium,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 16,
    fontWeight: 600,
    color: 'inherit',
    textDecoration: 'none',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    transition: 'color .4s ease',

    '&:last-child': {
      marginRight: 0,
    },

    '&:hover': {
      color: theme.palette.action.hover,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
