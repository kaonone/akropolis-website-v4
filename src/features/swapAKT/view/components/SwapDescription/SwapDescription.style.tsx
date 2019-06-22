import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (theme: Theme) => (
  {
    text: rule({
      maxWidth: theme.extra.sizes.maxContentWidth,
      fontSize: 20,
      lineHeight: 1.4,

      [theme.breakpoints.up('md')]: {
        fontSize: 22,
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: 25,
      },
    }),

    subTitle: rule({
      composes: '$text',
      textAlign: 'center',
    }),

    formulaArgument: rule({
      composes: '$text',
      marginLeft: theme.spacing.unit * 4,
      fontSize: 20,
    }),

    conclusion: rule({
      composes: '$text',
      margin: `${theme.spacing.unit * 2}px 0`,
    }),

    checkBoxField: rule({
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
    }),

    terms: rule({
      color: theme.extra.colors.royalPurple,
    }),

    acceptButton: rule({
      padding: `0 ${theme.spacing.unit * 4}px`,
    }),
  });

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
