import * as React from 'react';

import { Picture } from 'shared/view/elements';
import { StylesProps, provideStyles } from './ProfMembership.style';

interface IProps {
  membershipName: string;
  icon1x: string;
  icon2x: string;
  description: string;
}

function ProfMembership(props: IProps & StylesProps) {
  const { classes, membershipName, description, icon1x, icon2x } = props;
  return (
    <article className={classes.root}>
      <Picture
        fullWidth
        className={classes.icon}
        alt={membershipName}
        title={`${membershipName} - Akropolis`}
        type="image/png"
        x1={icon1x}
        x2={icon2x}
      />
      <p className={classes.description}>{description}</p>
    </article>
  );
}

export default provideStyles(ProfMembership);
