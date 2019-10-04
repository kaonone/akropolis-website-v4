import * as React from 'react';
import cn from 'classnames';

import { SocialLink } from 'shared/view/elements';
import { StylesProps, provideStyles } from './AkropolisSocialLinks.style';

interface IProps {
  direction?: 'row' | 'column';
}

// [url, need_to_fill_svg-paths]
const links: Array<[string, boolean]> = [
  ['https://github.com/akropolisio', true],
  ['https://twitter.com/akropolisio', true],
  ['https://t.me/akropolis_official', true],
  ['https://medium.com/akropolis', true],
  ['https://riot.im/app/#/room/#akropolis:matrix.org', false],
];

function AkropolisSocialLinks(props: IProps & StylesProps) {
  const { classes, direction = 'row' } = props;
  return (
    <div className={cn(classes.root, { [classes[direction]]: true })}>
      {links.map(([link, needToFill]) => (
        <SocialLink key={link} className={cn(classes.link, { [classes.fillPath]: needToFill })} href={link} />
      ))}
    </div>
  );
}

export default provideStyles(AkropolisSocialLinks);
