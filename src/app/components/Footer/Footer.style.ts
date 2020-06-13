import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    flexWrap: 'wrap',
  }),

  column: rule({
    width: '100%',
    flexGrow: 1,
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      width: 0,
    },

    '&$left': {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(3.5),

      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
        marginRight: theme.extra.spacing.horizontalPagePaddings.md.large,
      },

      [theme.breakpoints.up('lg')]: {
        marginRight: theme.extra.spacing.horizontalPagePaddings.lg.large,
      },
    },
  }),

  left: {},
  right: {},

  logo: rule({
    display: 'flex',
    marginBottom: theme.spacing(3.5),
    fontSize: 40,
    color: 'inherit',

    [theme.breakpoints.up('md')]: {
      alignSelf: 'flex-start',
      marginBottom: theme.spacing(5),
    },
  }),

  description: rule({
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 12,
    lineHeight: 2,
    textAlign: 'center',
    color: '#d6d6d6',

    [theme.breakpoints.up('md')]: {
      alignSelf: 'flex-start',
      textAlign: 'left',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
      lineHeight: 1.71,
    },
  }),

  address: rule({
    display: 'block',
    padding: `${theme.spacing(3)}px ${theme.extra.spacing.horizontalPagePaddings.xs.small}px`,
    backgroundColor: '#000',
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 12,
    textAlign: 'center',
    color: '#9b9b9b',
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
