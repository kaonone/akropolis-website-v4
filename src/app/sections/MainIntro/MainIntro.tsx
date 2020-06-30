import React from 'react';

import { useTranslate, tKeys } from 'services/i18n';
import { Intro } from 'app/components/Intro/Intro';

export function MainIntro() {
  const { t } = useTranslate();

  return <Intro title={t(tKeys.new.mainIntro.title.getKey())} description={t(tKeys.new.mainIntro.subtitle.getKey())} />;
}
