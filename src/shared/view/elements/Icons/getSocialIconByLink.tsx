import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import LaunchIcon from '@material-ui/icons/Launch';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import MediumIcon from './MediumIcon';
import TelegramIcon from './TelegramIcon';
import TwitterIcon from './TwitterIcon';

type LinkType = 'linkedin' | 'github' | 'twitter' | 'telegram' | 'medium';

export default function getSocialIconByLink(href: string, FallbackIcon?: React.ComponentType<SvgIconProps>) {
  const linkType = getLinkType(href);
  const Icon = linkType === 'unknown' ? (FallbackIcon || LaunchIcon) : IconByType[linkType];
  return Icon;
}

const IconByType: Record<LinkType, React.StatelessComponent<SvgIconProps>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  medium: MediumIcon,
  telegram: TelegramIcon,
  twitter: TwitterIcon,
};

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
