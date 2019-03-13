import * as React from 'react';

interface IProps {
  x1: string;
  x2: string;
  type: string;
  alt: string;
  title: string;
  className?: string;
  fullWidth?: boolean;
}

function Picture(props: IProps) {
  const { x1, x2, type, alt, title, fullWidth, className } = props;
  return (
    <picture className={className}>
      <source srcSet={`${x1} 1x, ${x2} 2x`} type={type} />
      <img src={x1} alt={alt} title={title} width={fullWidth ? '100%' : undefined} />
    </picture>
  );
}

export default Picture;
