import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from 'shared/types/common';
import { Link as MuiLink, LinkProps } from '../../elements';

interface Props {
  color?: LinkProps['color'];
  underline?: LinkProps['underline'];
  className?: string;
  onClick?(): void;
}

export default function NavMenuItem(props: IMenuItem & Props) {
  const { title, className, isExternal, path, scrollTo, disabled, onClick, color, underline } = props;

  if (disabled) {
    return <span className={className}>{title}</span>;
  }

  const commonProps = {
    className,
    color,
    onClick,
  };

  return isExternal ? (
    <MuiLink {...commonProps} underline={underline} href={path} target="_blank" rel="noopener noreferrer">
      {title}
    </MuiLink>
  ) : (
    <MuiLink {...commonProps} underline={underline} component={Link} to={{ pathname: path, hash: scrollTo }}>
      {title}
    </MuiLink>
  );
}
