import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const radius = 6;

const styles = (theme: Theme) => {
  const headerHeight = theme.spacing(10);

  return {
    root: rule({
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      borderRadius: radius,
      boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.2)',
    }),

    header: rule({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
      height: headerHeight,
      borderTopLeftRadius: radius,
      borderTopRightRadius: radius,
      backgroundImage: 'linear-gradient(to bottom, #b46fd7, #0674c5)',

      '&$hackathon0x': {
        '& $title': {
          height: theme.spacing(3.5),
        },

        '& $subtitle': {
          fontFamily: theme.extra.typography.secondaryFont,
          fontSize: 18,
          fontWeight: 200,
          lineHeight: 1.53,
          letterSpacing: 0.5,
          color: '#fff',
          textTransform: 'uppercase',
        },

        '& $icon': {
          position: 'absolute',
          top: theme.spacing(1.5),
          right: theme.spacing(1.5),
          fontSize: 93,
        },
      },

      '&$chamaNetwork': {
        overflow: 'hidden',

        '& $icon': {
          position: 'absolute',
          top: -Math.round(headerHeight * 0.225),
          left: 0,
          fontSize: Math.round(headerHeight * 1.5375),
          color: '#fff',
        },
      },
    }),

    preview: rule({
      display: 'flex',
      flexGrow: 1,
      padding: theme.spacing(3),
    }),

    title: {},
    subtitle: {},
    icon: {},
    hackathon0x: {},
    chamaNetwork: {},
  };
};

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
