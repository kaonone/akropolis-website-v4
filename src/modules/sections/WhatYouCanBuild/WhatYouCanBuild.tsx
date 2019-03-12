import * as React from 'react';

import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';
import { Adaptive } from 'services/adaptability';
import { Preview, Section } from 'shared/view/components';
import { Grid, Carousel } from 'shared/view/elements';

import { AlternativeIdentityIcon, BankIcon, NovelInstrumentsIcon, OwnSavingsIcon } from './icons';
import { StylesProps, provideStyles } from './WhatYouCanBuild.style';

function WhatYouCanBuild({ classes }: StylesProps) {
  const { t, tKeys } = useTranslate();

  type ItemType = keyof typeof tKeys.sections.whatYouCanBuild.items;
  const items: ItemType[] = ['ownSavings', 'novelInstruments', 'alternativeIdentity', 'bank'];
  const icons: Record<ItemType, JSX.Element> = {
    alternativeIdentity: <AlternativeIdentityIcon className={classes.icon} />,
    bank: <BankIcon className={classes.icon} />,
    novelInstruments: <NovelInstrumentsIcon className={classes.icon} />,
    ownSavings: <OwnSavingsIcon className={classes.icon} />,
  };

  const previews = items.map(item => (
    <Preview
      key={item}
      title={t(tKeys.sections.whatYouCanBuild.items[item].title.getKey())}
      titleIcon={icons[item]}
      description={t(tKeys.sections.whatYouCanBuild.items[item].description.getKey())}
    />
  ));

  return (
    <PageBlock className={classes.root} xsVPadding={3} mdVPadding={2} lgVPadding={8}>
      <Section title={t(tKeys.sections.whatYouCanBuild.title.getKey())}>
        <Adaptive to="md">
          <Carousel pagination="dots">
            {previews}
          </Carousel>
        </Adaptive>
        <Adaptive from="md">
          <Grid container spacing={24}>
            {previews.map((preview, index) => (
              <Grid key={index} item xs={12} md={6} >
                {preview}
              </Grid>
            ))}
          </Grid>
        </Adaptive>
      </Section>
    </PageBlock>
  );
}

export default provideStyles(WhatYouCanBuild);
