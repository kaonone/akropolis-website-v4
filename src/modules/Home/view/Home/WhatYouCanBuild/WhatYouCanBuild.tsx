import * as React from 'react';

import { useTranslate } from 'services/i18n';
import { Adaptive } from 'services/adaptability';
import { Preview } from 'shared/view/components';
import { Grid, Carousel } from 'shared/view/elements';

import { AlternativeIdentityIcon, BankIcon, NovelInstrumentsIcon, OwnSavingsIcon } from './icons';
import { StylesProps, provideStyles } from './WhatYouCanBuild.style';

function WhatYouCanBuild({ classes }: StylesProps) {
  const { t, tKeys } = useTranslate();

  type ItemType = keyof typeof tKeys.modules.home.whatYouCanBuild.items;
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
      title={t(tKeys.modules.home.whatYouCanBuild.items[item].title.getKey())}
      titleIcon={icons[item]}
      description={t(tKeys.modules.home.whatYouCanBuild.items[item].description.getKey())}
    />
  ));

  return (
    <>
      <Adaptive to="md">
        <Carousel>
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
    </>
  );
}

export default provideStyles(WhatYouCanBuild);
