import * as React from 'react';

import { PRIVACY_POLICY_URL, QUEST_T_AND_C_URL } from 'assets';
import { NavMenuItem } from 'shared/view/components';
import { useTranslate } from 'services/i18n';

import { StylesProps, provideStyles } from './QuestFooter.style';

function QuestFooter(props: StylesProps) {
  const { classes } = props;
  const { t, tKeys } = useTranslate();

  const links = [
    {
      title: t(tKeys.modules.navigation.termsConditions.getKey()),
      path: QUEST_T_AND_C_URL,
    }, {
      title: t(tKeys.modules.navigation.privacyPolicy.getKey()),
      path: PRIVACY_POLICY_URL,
    }, {
      title: t(tKeys.modules.navigation.pointSystem.getKey()),
      path: 'https://wiki.akropolis.io/pointsys',
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
