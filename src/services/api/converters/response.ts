import { IUser } from 'shared/types/models';

import { IServerUser, ServerUserErrorCode, IServerError, IServerUserError } from '../types';

export function convertUserResponse(data: { user: IServerUser }): IUser {
  const { address, amount } = data.user;
  return { address, tokens: amount };
}

export function convertUserErrorResponse(error: IServerError<ServerUserErrorCode>): IServerUserError {
  return {
    code: String(error.code) as ServerUserErrorCode,
    message: error.message,
  };
}
