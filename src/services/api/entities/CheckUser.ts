import { bind } from 'decko';

import BaseApi from './BaseApi';
import { IUser } from 'shared/types/models';

import HttpActions from '../HttpActions';
import { convertRegisterUserRequest, convertUserResponse, convertUserErrorResponse } from '../converters';
import { IServerUser } from '../types/Note';
import Logger from './Logger';

export default class CheckUser extends BaseApi {
  public log: Logger['log'];
  private _logger: Logger;

  constructor(actions: HttpActions) {
    super(actions);
    this._logger = new Logger(actions);
    this.log = this._logger.log;
  }

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
      data: { address: address.toLowerCase(), recaptcha },
    });

    return this.handleResponse(response, convertUserResponse, convertUserErrorResponse);
  }
}
