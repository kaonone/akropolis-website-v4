import { UserError } from 'shared/types/models';
import { ApiError } from '.';
import { IServerUserError, ServerUserErrorCode } from 'services/api/types';

const extendError = (name: string, { defaultMessage }: { defaultMessage: string }) =>
  class extends Error {
    public name = name;
    constructor(message = defaultMessage) {
      super(message);
    }
  };

export const InvalidAddress = extendError('InvalidAddress', {
  defaultMessage: 'The address is invalid',
});
export const InvalidNetworkType = extendError('InvalidNetworkType', {
  defaultMessage: 'The network type is invalid',
});
export const InvalidURI = extendError('InvalidURI', {
  defaultMessage: 'The URI is invalid',
});
export const NoConnection = extendError('NoConnection', {
  defaultMessage: 'There is no connection',
});

// tslint:disable-next-line:max-classes-per-file
export class DAONotFound extends Error {
  public name: string = 'DAONotFound';
  public dao: string;

  constructor(dao: string) {
    super('The ENS address of this dao could not be resolved');
    this.dao = dao;
  }
}

export function parseUserError(error: ApiError<IServerUserError>): UserError {

  if (!error.payload || !error.payload.code) {
    return 'unknown';
  }

  const errorCode = error.payload.code;

  const errorByCode: Record<ServerUserErrorCode, UserError> = {
    '901': 'notConfirmed',
    '902': 'notConfirmed',
    '404': 'notExist',
  };

  return errorByCode[errorCode] ? errorByCode[errorCode] : 'unknown';
}
