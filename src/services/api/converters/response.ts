import { IUser } from 'shared/types/models';

import { IServerUser } from '../types/Note';

export function convertUserResponse(user: IServerUser): IUser {
  const { address, tokens } = user;
  return { address, tokens };
}
