import * as React from 'react';

import { useTranslate } from 'services/i18n';
import { StylesProps, provideStyles } from './Intro.style';

function Intro(props: StylesProps) {
  const { classes } = props;
  const { t, tKeys } = useTranslate();
  return (
    <div className={classes.root}>
      <p className={classes.title}>{t(tKeys.modules.home.intro.title.getKey())}</p>
      <p className={classes.subtitle}>{t(tKeys.modules.home.intro.subtitle.getKey())}</p>
    </div>
  );
}

export default provideStyles(Intro);
