import * as React from 'react';

import { Picture, SocialLink } from 'shared/view/elements';
import { StylesProps, provideStyles } from './TeamMember.style';

interface IProps {
  links: string[];
  fullName: string;
  position: string;
  photo1x: string;
  photo2x: string;
  background: string[];
  tags: string[];
}

function TeamMember(props: IProps & StylesProps) {
  const { classes, links, fullName, position, photo1x, photo2x, background, tags } = props;
  return (
    <article className={classes.root}>
      <Picture fullWidth alt={fullName} title={`${fullName} - Akropolis`} type="image/png" x1={photo1x} x2={photo2x} />
      <h3 className={classes.title}>
        <span className={classes.name}>{fullName}</span>
        {links.map(link => <SocialLink key={link} href={link} className={classes.socialLink} />)}
      </h3>
      <p className={classes.position}>{position}</p>
      <p className={classes.tags}>
        {tags.map(tag => <span key={tag} className={classes.tag}>{tag}</span>)}
      </p>
      <p className={classes.background}>{background.join(' • ')}</p>
    </article>
  );
}

export default provideStyles(TeamMember);
