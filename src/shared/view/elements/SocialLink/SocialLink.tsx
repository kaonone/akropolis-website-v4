import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { GithubIcon, LinkedinIcon, LaunchIcon, MediumIcon, TelegramIcon, TwitterIcon } from '../Icons';
import IconButton from '../IconButton/IconButton';

type LinkType = 'linkedin' | 'github' | 'twitter' | 'telegram' | 'medium';

interface IProps {
  className?: string;
  href: string;
  FallbackIcon?: React.StatelessComponent<SvgIconProps>;
}

const IconByType: Record<LinkType, React.StatelessComponent<SvgIconProps>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  telegram: TelegramIcon,
  twitter: TwitterIcon,
};

function SocialLink(props: IProps) {
  const { className, href, FallbackIcon } = props;
  const linkType = getLinkType(href);
  const Icon = linkType === 'unknown' ? (FallbackIcon || LaunchIcon) : IconByType[linkType];
  return (
    <IconButton
      href={href}
      className={className}
      target="_target"
      rel="noopener noreferrer"
    >
      <Icon fontSize="inherit" />
    </IconButton>
  );
}

const linkedinRegExp = /^.+?\blinkedin\.com\b.+$/;
const githubRegExp = /^.+?\bgithub\.com\b.+$/;
const mediumRegExp = /^.+?\bmedium\.com\b.+$/;
const telegramRegExp = /^.+?\bt\.me\b.+$/;
const twitterRegExp = /^.+?\btwitter\.com\b.+$/;

const typeByRegExp = new Map<RegExp, LinkType>([
  [linkedinRegExp, 'linkedin'],
  [githubRegExp, 'github'],
  [mediumRegExp, 'medium'],
  [telegramRegExp, 'telegram'],
  [twitterRegExp, 'twitter'],
]);

function getLinkType(link: string): LinkType | 'unknown' {
  const regExps = [linkedinRegExp, githubRegExp, mediumRegExp, telegramRegExp, twitterRegExp];
  const linkRegExp = regExps.find(item => item.test(link));
  return linkRegExp && typeByRegExp.get(linkRegExp) || 'unknown';
}

export default SocialLink;
