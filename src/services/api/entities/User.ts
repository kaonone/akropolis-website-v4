import { bind } from 'decko';

import BaseApi from './BaseApi';
import { IUser } from 'shared/types/models';

import { convertRegisterUserRequest, convertUserResponse, convertUserErrorResponse } from '../converters';
import { IServerUser } from '../types/Note';

// import delay from 'shared/helpers/delay';
// const mockAddress = '0x29f2E74eE824ebeF53399A7A58102448F998B87c';
// const mockAddress = '0xFOO'; // сейчас есть несколько аддресов на беке - это один из них
// const mockUser: IUser = { address: mockAddress, tokens: 73 };

export default class User extends BaseApi {

  @bind
  public async registerUser(address: string, captcha: string): Promise<IUser> {
    // await delay(2000);
    // return mockUser;

    const response = await this.actions.post<IServerUser>({
      url: '/',
      data: convertRegisterUserRequest(address, captcha),
    });

    return this.handleResponse(response, convertUserResponse, convertUserErrorResponse);
  }

  @bind
  public async checkAddress(address: string, recaptcha: string): Promise<IUser> {
    // await delay(2000);
    // return mockUser;

    const response = await this.actions.get<IServerUser>({
      url: `/get`,
      data: { address, recaptcha },
    });

    return this.handleResponse(response, convertUserResponse, convertUserErrorResponse);
  }
}
