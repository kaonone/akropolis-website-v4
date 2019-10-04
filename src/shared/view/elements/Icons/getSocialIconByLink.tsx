import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import LaunchIcon from '@material-ui/icons/Launch';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import MediumIcon from './MediumIcon';
import TelegramIcon from './TelegramIcon';
import TwitterIcon from './TwitterIcon';
import BenzingaIcon from './BenzingaIcon';
import CnbcIcon from './CnbcIcon';
import EntrepreneurIcon from './EntrepreneurIcon';
import ForbesIcon from './ForbesIcon';
import InvestopediaIcon from './InvestopediaIcon';
import NasdaqIcon from './NasdaqIcon';
import RiotIcon from './RiotIcon';

type LinkType =
  'linkedin' | 'github' | 'twitter' | 'telegram' | 'medium' | 'benzinga' | 'cnbc' | 'entrepreneur' | 'forbes'
  | 'investopedia' | 'nasdaq' | 'riot';

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
  benzinga: BenzingaIcon,
  cnbc: CnbcIcon,
  entrepreneur: EntrepreneurIcon,
  forbes: ForbesIcon,
  investopedia: InvestopediaIcon,
  nasdaq: NasdaqIcon,
  riot: RiotIcon,
};

const linkedinRegExp = /^.+?\blinkedin\.com\b.+$/;
const githubRegExp = /^.+?\bgithub\.com\b.+$/;
const mediumRegExp = /^.+?\bmedium\.com\b.+$/;
const telegramRegExp = /^.+?\bt\.me\b.+$/;
const twitterRegExp = /^.+?\btwitter\.com\b.+$/;
const benzingaRegExp = /^.+?\bbenzinga\.com\b.+$/;
const cnbcRegExp = /^.+?\bcnbc\.com\b.+$/;
const entrepreneurRegExp = /^.+?\bentrepreneur\.com\b.+$/;
const forbesRegExp = /^.+?\bforbes\.com\b.+$/;
const investopediaRegExp = /^.+?\binvestopedia\.com\b.+$/;
const nasdaqRegExp = /^.+?\bnasdaq\.com\b.+$/;
const riotRegExp = /^.+?\briot\.im\b.+$/;

const typeByRegExp = new Map<RegExp, LinkType>([
  [linkedinRegExp, 'linkedin'],
  [githubRegExp, 'github'],
  [mediumRegExp, 'medium'],
  [telegramRegExp, 'telegram'],
  [twitterRegExp, 'twitter'],
  [benzingaRegExp, 'benzinga'],
  [cnbcRegExp, 'cnbc'],
  [entrepreneurRegExp, 'entrepreneur'],
  [forbesRegExp, 'forbes'],
  [investopediaRegExp, 'investopedia'],
  [nasdaqRegExp, 'nasdaq'],
  [riotRegExp, 'riot'],
]);

function getLinkType(link: string): LinkType | 'unknown' {
  const regExps = [
    linkedinRegExp, githubRegExp, mediumRegExp, telegramRegExp, twitterRegExp, benzingaRegExp, cnbcRegExp,
    entrepreneurRegExp, forbesRegExp, investopediaRegExp, nasdaqRegExp, riotRegExp,
  ];
  const linkRegExp = regExps.find(item => item.test(link));
  return linkRegExp && typeByRegExp.get(linkRegExp) || 'unknown';
}
