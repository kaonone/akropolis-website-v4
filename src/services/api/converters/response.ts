import { ISumsubAccessToken, IUser } from 'shared/types/models';

import { IServerUser, ServerUserErrorCode, IServerError, IServerUserError, IServerSumsubAccessToken } from '../types';

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

export function convertSumsubAccessKeyResponse(data: IServerSumsubAccessToken): ISumsubAccessToken {
  return data;
}
