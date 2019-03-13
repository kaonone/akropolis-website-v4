import * as React from 'react';
import { Picture } from 'shared/view/elements';
import { StylesProps, provideStyles } from './PartnerCard.style';

interface IProps {
  url: string;
  alt: string;
  icon1x: string;
  icon2x: string;
}

function PartnerCard(props: IProps & StylesProps) {
  const { classes, url, icon1x, icon2x, alt } = props;
  return (
    <a className={classes.root} href={url} target="_blank" rel="noopener noreferrer">
      <Picture fullWidth alt={alt} title={`${alt} - Akropolis`} type="image/png" x1={icon1x} x2={icon2x} />
    </a>
  );
}

export default provideStyles(PartnerCard);
