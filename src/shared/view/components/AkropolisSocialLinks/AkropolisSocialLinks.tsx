import * as React from 'react';
import cn from 'classnames';

import { SocialLink } from 'shared/view/elements';
import { StylesProps, provideStyles } from './AkropolisSocialLinks.style';

interface IProps {
  direction?: 'row' | 'column';
}

const links: string[] = [
  'https://github.com/akropolisio',
  'https://twitter.com/akropolisio',
  'https://t.me/akropolis_official',
  'https://medium.com/akropolis',
  'https://www.linkedin.com/company/akropolisio/',
];

function AkropolisSocialLinks(props: IProps & StylesProps) {
  const { classes, direction = 'row' } = props;
  return (
    <div className={cn(classes.root, { [classes[direction]]: true })}>
      {links.map(link => <SocialLink key={link} className={classes.link} href={link} />)}
    </div>
  );
}

export default provideStyles(AkropolisSocialLinks);
