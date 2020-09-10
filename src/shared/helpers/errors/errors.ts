import { UserError } from 'shared/types/models';
import { ApiError } from '.';
import { IServerUserError, ServerUserErrorCode } from 'services/api/types';

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
