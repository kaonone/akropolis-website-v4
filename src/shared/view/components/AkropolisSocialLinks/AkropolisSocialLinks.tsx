import * as React from 'react';
import cn from 'classnames';

import SvgIcon from '@material-ui/core/SvgIcon';
import { SocialLink } from 'shared/view/elements';
import { MainSvgGradient } from 'shared/view/elements/Icons';
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
  ['https://discord.gg/Y58CGUW', true],
];

function AkropolisSocialLinks(props: IProps & StylesProps) {
  const { classes, direction = 'row' } = props;
  return (
    <div className={cn(classes.root, { [classes[direction]]: true })}>
      <div className={classes.hidden}>
        <SvgIcon>
          <defs>
            <MainSvgGradient />
          </defs>
        </SvgIcon>
      </div>
      {links.map(([link, needToFill]) => (
        <SocialLink key={link} className={cn(classes.link, { [classes.fillPath]: needToFill })} href={link} />
      ))}
    </div>
  );
}

export default provideStyles(AkropolisSocialLinks);
