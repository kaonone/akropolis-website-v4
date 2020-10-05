import * as React from 'react';

import { UserError, IUser } from 'shared/types/models';

export function useMakeFieldsForCheckUser() {

  const [tokens, setTokens] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [error, setError] = React.useState<null | UserError>(null);

  const onSuccessChecking = React.useCallback((user: IUser) => {
    setTokens(user.tokens);
    setAddress(user.address);
  }, []);

  const onRetry = React.useCallback(() => {
    setTokens('');
    setAddress('');
    setError(null);
  }, []);

  return { tokens, address, error, onSuccessChecking, onError: setError, onRetry };
}
