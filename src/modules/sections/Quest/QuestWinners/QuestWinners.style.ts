import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => ({
  button: rule({
    background: '#fff',
    color: '#2d3d66',

    '&$withOpacity': {
      opacity: 0.5,
    },
  }),

  paper: rule({
    maxWidth: 270,
    padding: theme.spacing.unit * 2,
    marginTop: - theme.spacing.unit * 2,
    boxShadow: '0 0.125rem 0.1875rem 0 rgba(184, 184, 184, 0.5)',
    fontFamily: theme.extra.typography.primaryFont,
  }),

  title: rule({
    margin: 0,
    fontSize: 17.5,
    color: '#2d3d66',
    textTransform: 'uppercase',
  }),

  value: rule({
    fontSize: 17.5,
    color: '#9c58fc',
  }),

  winner: rule({
    composes: '$value',

    '&:nth-child(2n)': {
      textAlign: 'right',
    },
  }),

  withOpacity: rule({}),
});

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
