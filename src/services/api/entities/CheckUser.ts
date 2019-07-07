import { bind } from 'decko';

import BaseApi from './BaseApi';
import { IUser } from 'shared/types/models';

import { convertRegisterUserRequest, convertUserResponse, convertUserErrorResponse } from '../converters';
import { IServerUser } from '../types/Note';

export default class Bounty extends BaseApi {

  @bind
  public async registerUser(address: string, captcha: string): Promise<IUser> {
    const response = await this.actions.post<IServerUser>({
      url: '/',
      data: convertRegisterUserRequest(address, captcha),
    });

    return this.handleResponse(response, convertUserResponse, convertUserErrorResponse);
  }

  @bind
  public async checkAddress(address: string, recaptcha: string): Promise<IUser> {
    const response = await this.actions.get<IServerUser>({
      url: `/get`,
      data: { address, recaptcha },
    });

    return this.handleResponse(response, convertUserResponse, convertUserErrorResponse);
  }
}
