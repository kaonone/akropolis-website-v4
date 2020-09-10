
import HttpActions from './HttpActions';
import { CheckUser } from './entities';
import getEnvParams from 'core/getEnvParams';

class Api {
  public tokenSwap: CheckUser;

  constructor() {
    const tokenSwapActions = new HttpActions(getEnvParams().tokenSwapApiUrl);

    this.tokenSwap = new CheckUser(tokenSwapActions);
  }
}

export default Api;
