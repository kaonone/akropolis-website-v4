import React from 'react';
import { useTheme } from 'shared/styles';
import { attachStaticFields } from 'shared/helpers/object';

const ID = 'svg-main-gradient';

function MainSvgGradientComponent() {
  const theme = useTheme();
  return (
    <linearGradient id={ID} x1="0%" x2="100%" y1="50%" y2="50%">
      {theme.gradients.main.points.map(({ offset, color }, index) => (
        <stop key={index} offset={offset} stopColor={color} />
      ))}
    </linearGradient>
  );
}

export const MainSvgGradient = attachStaticFields(MainSvgGradientComponent, {
  ID,
});
