import React from 'react';
import { Button, Link, LinkProps } from 'shared/view/elements';
import { useTranslate, tKeys } from 'services/i18n';
import { Intro } from 'app/components/Intro/Intro';

export function MainIntro() {
  const { t } = useTranslate();

  return (
    <Intro title={t(tKeys.new.mainIntro.title.getKey())} description={t(tKeys.new.mainIntro.subtitle.getKey())}>
      <Button
        component={Link as React.FunctionComponent<Omit<LinkProps, 'color'>>}
        underline="none"
        size="large"
        color="gradient"
        href="https://pool.akropolis.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t(tKeys.new.mainIntro.tryButton.getKey())}
      </Button>
    </Intro>
  );
}
