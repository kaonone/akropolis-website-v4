import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from 'shared/types/common';

export default function NavMenuItem(props: IMenuItem & { className: string }) {
  const { title, className, isExternal, path, scrollTo, disabled } = props;

  if (disabled) {
    return <span className={className}>{title}</span>;
  }

  return isExternal ? (
    <a className={className} href={path} target="_blank" rel="noopener noreferrer" >
      {title}
    </a>
  ) : <Link className={className} to={{ pathname: path, hash: scrollTo }}>{title}</Link>;
}
