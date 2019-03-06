import { bind } from 'decko';

import HttpActions from './HttpActions';

class Api {
  private actions: HttpActions;

  private headers = {
    get: {
      'Accept': 'application/vnd.github.v3+json',
    },
  };

  constructor() {
    this.actions = new HttpActions('https://api_url.com/', this.headers);
  }

  @bind
  public async loadData(URL: string) {
    const response = await this.actions.get<any>(URL);
    return response.data;
  }
}

export default Api;
