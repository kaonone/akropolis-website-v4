import * as React from 'react';

import { useTranslate } from 'services/i18n';
import { Adaptive } from 'services/adaptability';
import { Preview } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

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

  return (
    <>
      <Adaptive to="md">
        Slider view
      </Adaptive>
      <Adaptive from="md">
        <Grid container spacing={24}>
          {items.map(item => (
            <Grid key={item} item xs={12} md={6} >
              <Preview
                title={t(tKeys.modules.home.whatYouCanBuild.items[item].title.getKey())}
                titleIcon={icons[item]}
                description={t(tKeys.modules.home.whatYouCanBuild.items[item].description.getKey())}
              />
            </Grid>
          ))}
        </Grid>
      </Adaptive>
    </>
  );
}

export default provideStyles(WhatYouCanBuild);
