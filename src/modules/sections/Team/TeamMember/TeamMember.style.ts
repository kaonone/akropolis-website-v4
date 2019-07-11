import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';
import { hexToRGBA } from 'shared/styles/helpers';

const styles = (theme: Theme) => ({
  root: rule({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),

  title: rule({
    margin: `${theme.spacing.unit * 2.5}px 0 ${theme.spacing.unit * 1.5}px`,
    display: 'block',
    textAlign: 'center',
    fontFamily: theme.extra.typography.primaryFont,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 1.75,
    color: theme.extra.colors.rhino,

    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing.unit * 2,
      fontSize: 24,
      lineHeight: 1.5,
    },
  }),

  name: rule({
    marginRight: theme.spacing.unit * 0.5,
  }),

  socialLink: rule({
    fontSize: 'inherit',
    padding: theme.spacing.unit * 0.5,
    color: 'inherit',
    display: 'inline-flex',
    verticalAlign: 'top',
  }),

  position: rule({
    margin: 0,
    marginBottom: theme.spacing.unit * 1.5,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    color: theme.extra.colors.cornflowerBlue,
    textAlign: 'center',

    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
    },
  }),

  tags: rule({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 0,
    marginBottom: theme.spacing.unit * 0.25,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 14,
    webkitFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',

    [theme.breakpoints.up('lg')]: {
      fontSize: 16,
    },
  }),

  tag: rule({
    display: 'flex',
    alignItems: 'center',
    flexShrink: 1,
    minWidth: 0,
    margin: '0px 6px 6px 0px',
    paddingRight: 6,
    paddingLeft: 6,
    borderRadius: 3,
    lineHeight: '120%',
    textAlign: 'center',
    background: hexToRGBA(theme.extra.colors.mediumPurple, 0.25),
  }),

  background: rule({
    margin: 0,
    fontFamily: theme.extra.typography.secondaryFont,
    fontSize: 13,
    lineHeight: 1.85,
    color: theme.extra.colors.rhino,
    textAlign: 'center',

    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
    },
  }),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
