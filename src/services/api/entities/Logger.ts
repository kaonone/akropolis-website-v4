import { bind } from 'decko';
import { ApiError } from 'shared/helpers/errors';

import { CheckUserActionType, PayloadByCheckUserActionType } from '../types';
import BaseApi from './BaseApi';

export default class Logger extends BaseApi {
  private _tokenLoading: Promise<string> | null = null;

  @bind
  public async log<T extends CheckUserActionType>(action: T, payload: PayloadByCheckUserActionType[T]): Promise<void> {
    const token = await this._getToken();

    try {
      const response = await this.actions.post({
        url: '/log',
        data: { token, action, payload },
      });
      this.handleResponse(response);
    } catch (error) {
      if (error instanceof ApiError && error.code === 401) {
        this._tokenLoading = null;
      }
      throw error;
    }
  }

  private async _getToken(): Promise<string> {
    this._tokenLoading = this._tokenLoading || this._loadToken();
    return this._tokenLoading;
  }

  private async _loadToken(): Promise<string> {
    interface IResponse {
      status: 'ok';
      token: string;
    }

    const response = await this.actions.post<IResponse>({
      url: `/token`,
      data: {},
    });

    return this.handleResponse(response, ({ token }: IResponse) => token);
  }
}
