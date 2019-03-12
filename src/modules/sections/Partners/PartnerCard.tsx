import * as React from 'react';
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
      <picture>
        <source srcSet={`${icon1x} 1x, ${icon2x} 2x`} type="image/png" />
        <img src={icon1x} alt={alt} title={`${alt} - Akropolis`} width="100%" />
      </picture>
    </a>
  );
}

export default provideStyles(PartnerCard);
