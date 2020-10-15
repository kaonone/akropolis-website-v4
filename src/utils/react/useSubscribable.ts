import { useState, useEffect, useMemo } from 'react';
import { Subscribable } from 'rxjs';

import { RemoteData, success, failure, loading } from '../remoteData';
import { getErrorMsg } from '../getErrorMsg';

function useSubscribable<R>(
  getTarget: () => Subscribable<R>, // TODO: R or RemoteData<R, E>
  deps: any[],
  initial: RemoteData<R, string> = loading,
): RemoteData<R, string> {
  const [value, setValue] = useState<RemoteData<R, string>>(initial);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const target = useMemo(getTarget, deps);

  useEffect(() => {
    setValue(initial);
    const subscription = target.subscribe({
      next: nextValue => setValue(success(nextValue)),
      error: err => {
        setValue(failure(getErrorMsg(err)));
        if (process.env.NODE_ENV === 'development') {
          console.error(err);
        }
      },
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return value;
}

export { useSubscribable };
