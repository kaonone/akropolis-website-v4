import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from 'shared/types/common';

export default function NavMenuItem(props: IMenuItem & { className: string }) {
  const { title, className, isExternal, path } = props;
  return isExternal ? (
    <a className={className} href={path} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  ) : <Link className={className} to={path}>{title}</Link>;
}
