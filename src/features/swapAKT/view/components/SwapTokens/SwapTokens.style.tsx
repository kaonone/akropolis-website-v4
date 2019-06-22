import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => (
  {

    root: rule({
      maxWidth: theme.extra.sizes.maxContentWidth,

    }),

    text: rule({
      maxWidth: theme.extra.sizes.maxContentWidth,
      fontSize: 20,
      lineHeight: 1.29,

      [theme.breakpoints.up('md')]: {
        fontSize: 22,
        lineHeight: 1.56,
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: 25,
      },
    }),

    address: rule({
      margin: `${theme.spacing.unit * 3}px 0`,
    }),

    qrCode: rule({
      maxWidth: '6.25rem',
      maxHeight: '6.25rem',
      border: 'solid white 0.125rem',
    }),

    acceptButton: rule({
      padding: `0 ${theme.spacing.unit * 4}px`,
    }),
  });

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
