import React from 'react';
import { responseInterface } from 'swr';
import { getErrorMsg } from 'shared/helpers/errors';

interface Props {
  response: responseInterface<any, any>;
  loader?: React.ReactElement;
  children: React.ReactNode;
}

export function Loading({ loader, children, response: { data, error } }: Props) {
  if (error) {
    return <div>failed to load {getErrorMsg(error)}</div>;
  }
  if (!data) {
    return loader || <div>loading...</div>;
  }
  return <>{children}</>;
}
