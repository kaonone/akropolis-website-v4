import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import { GithubIcon, LinkedinIcon, LaunchIcon } from '../Icons';
import IconButton from '../IconButton/IconButton';

type LinkType = 'linkedin' | 'github';

interface IProps {
  className?: string;
  href: string;
  FallbackIcon?: React.StatelessComponent<SvgIconProps>;
}

const IconByType: Record<LinkType, React.StatelessComponent<SvgIconProps>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
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

const linkedinRegExp = /^.+?linkedin\.com.+$/;
const githubRegExp = /^.+?github\.com.+$/;

const typeByRegExp = new Map<RegExp, LinkType>([
  [linkedinRegExp, 'linkedin'],
  [githubRegExp, 'github'],
]);

function getLinkType(link: string): LinkType | 'unknown' {
  const linkRegExp = [linkedinRegExp, githubRegExp].find(item => item.test(link));
  return linkRegExp && typeByRegExp.get(linkRegExp) || 'unknown';
}

export default SocialLink;
