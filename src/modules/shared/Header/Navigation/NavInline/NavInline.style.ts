import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    transformOrigin: 'right',
    transform: 'scale(0)',
    opacity: 0,
    transition: 'transform .4s ease, opacity .4s ease',

    [theme.breakpoints.up('lg')]: {
      opacity: 1,
      transform: 'scale(1)',
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

    '&:hover': {
      color: theme.extra.palette.link.hover,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
