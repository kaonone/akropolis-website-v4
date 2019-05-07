import * as React from 'react';

import termsAndCondsLink from 'assets/Akropolis_Terms_and_Conditions.pdf';
import { NavMenuItem } from 'shared/view/components';

import { StylesProps, provideStyles } from './QuestFooter.style';

const links = [
  {
    title: 'Terms & Conditions',
    path: termsAndCondsLink,
  }, {
    title: 'Point System',
    path: 'https://wiki.akropolis.io/pointsys',
  },
];

function QuestFooter(props: StylesProps) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {links.map(link => (
        <NavMenuItem key={link.path} isExternal className={classes.link} {...link} />
      ))}
    </div>
  );
}

export default provideStyles(QuestFooter);
