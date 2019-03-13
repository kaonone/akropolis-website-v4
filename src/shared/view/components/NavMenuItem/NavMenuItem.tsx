import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuItem } from 'shared/types/common';

export default function NavMenuItem(props: IMenuItem & { className: string, onClick?(): void; }) {
  const { title, className, isExternal, path, scrollTo, disabled, onClick } = props;

  if (disabled) {
    return <span className={className}>{title}</span>;
  }

  return isExternal ? (
    <a className={className} href={path} target="_blank" rel="noopener noreferrer" onClick={onClick}>
      {title}
    </a>
  ) : (
      <Link className={className} to={{ pathname: path, hash: scrollTo }} onClick={onClick}>
        {title}
      </Link>
    );
}
