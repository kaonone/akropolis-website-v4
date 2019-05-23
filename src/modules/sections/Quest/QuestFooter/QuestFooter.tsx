import * as React from 'react';

import termsAndCondsLink from 'assets/Akropolis_Terms_and_Conditions.pdf';
import { NavMenuItem } from 'shared/view/components';
import { useTranslate } from 'services/i18n';

import { StylesProps, provideStyles } from './QuestFooter.style';

function QuestFooter(props: StylesProps) {
  const { classes } = props;
  const { t, tKeys: { sections: { quest: tKeys } } } = useTranslate();

  const links = [
    {
      title: t(tKeys.termsConditions.getKey()),
      path: termsAndCondsLink,
    }, {
      title: t(tKeys.pointSystem.getKey()),
      path: 'https://wiki.akropolis.io/pointsys',
    },
  ];
  return (
    <div className={classes.root}>
      {links.map(link => (
        <NavMenuItem key={link.path} isExternal className={classes.link} {...link} />
      ))}
    </div>
  );
}

export default provideStyles(QuestFooter);
