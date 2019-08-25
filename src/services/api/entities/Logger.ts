import fp2, { Options } from 'fingerprintjs2';
import { bind } from 'decko';
import { ApiError } from 'shared/helpers/errors';

import { CheckUserActionType, PayloadByCheckUserActionType } from '../types';
import BaseApi from './BaseApi';

let fpComponents: Record<string, string>;

async function getFp(): Promise<typeof fpComponents> {
  const options: Options = {
    excludes: {
      webgl: true,
      canvas: true,
      plugins: true,
      enumerateDevices: true,
    },
  };

  fpComponents = fpComponents || await new Promise(resolve => {
    const handle = () => {
      fp2.get(options, components => resolve(convertComponents(components)));
    };

    if (window.requestIdleCallback) {
      window.requestIdleCallback(handle);
    } else {
      setTimeout(handle, 500);
    }
  });

  return fpComponents;
}

function convertComponents(components: fp2.Component[]): Record<string, string> {
  return components.reduce((acc, { key, value }) => ({ ...acc, [key]: value.toString() }), {});
}

export default class Logger extends BaseApi {
  private _tokenLoading: Promise<string> | null = null;

  @bind
  public async log<T extends CheckUserActionType>(action: T, payload: PayloadByCheckUserActionType[T]): Promise<void> {
    const token = await this._getToken();
    const fp = await getFp();

    try {
      const response = await this.actions.post({
        url: '/log',
        data: { token, action, payload: { ...payload, fp: JSON.stringify(fp) } },
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
