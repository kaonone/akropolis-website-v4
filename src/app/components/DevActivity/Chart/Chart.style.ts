import { makeStyles } from 'shared/styles';

export const useStyles = makeStyles((theme) => {
  const graphicMarginBottom = theme.spacing(1);
  const switchButtonsHeight = 25;
  const graphicHeight = `calc(100% - ${graphicMarginBottom}px - ${switchButtonsHeight}px)`;

  return {
    root: {
      height: 250,
    },

    graphic: {
      height: graphicHeight,
      marginBottom: graphicMarginBottom,
    },
  };
});
