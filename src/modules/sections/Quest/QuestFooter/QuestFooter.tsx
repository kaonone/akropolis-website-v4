import * as React from 'react';

// import termsAndCondsLink from 'assets/Akropolis_Terms_and_Conditions.pdf';
import privacyLink from 'assets/Akropolis_Privacy_Policy.pdf';
import { NavMenuItem } from 'shared/view/components';
import { useTranslate } from 'services/i18n';

import { StylesProps, provideStyles } from './QuestFooter.style';

function QuestFooter(props: StylesProps) {
  const { classes } = props;
  const { t, tKeys } = useTranslate();

  const links = [
    {
      title: t(tKeys.modules.navigation.termsConditions.getKey()),
      path: '#',
      disabled: true,
      // path: termsAndCondsLink,
    }, {
      title: t(tKeys.modules.navigation.privacyPolicy.getKey()),
      path: privacyLink,
      disabled: false,
    }, {
      title: t(tKeys.modules.navigation.pointSystem.getKey()),
      path: '#',
      disabled: true,
      // path: 'https://wiki.akropolis.io/pointsys',
    },
  ];
  return (
    <div className={classes.root}>
      {links.map(link => (
        <NavMenuItem key={link.title} isExternal className={classes.link} {...link} />
      ))}
    </div>
  );
}

export default provideStyles(QuestFooter);
