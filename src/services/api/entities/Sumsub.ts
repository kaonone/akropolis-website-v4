import { bind } from 'decko';

import BaseApi from './BaseApi';
import { ISumsubAccessToken } from 'shared/types/models';

import HttpActions from '../HttpActions';
import { IServerSumsubAccessToken } from '../types/Note';
import { convertSumsubAccessKeyResponse } from '../converters';

export default class Sumsub extends BaseApi {
  constructor(actions: HttpActions) {
    super(actions);
  }

  @bind
  public async getAccessToken(address: string): Promise<ISumsubAccessToken> {
    const response = await this.actions.get<IServerSumsubAccessToken>({
      url: `/user/${address}`,
    });

    return this.handleResponse(response, convertSumsubAccessKeyResponse);
  }
}
