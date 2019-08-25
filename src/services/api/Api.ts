
import HttpActions from './HttpActions';
import { CheckUser } from './entities';
import getEnvParams from 'core/getEnvParams';

class Api {
  public bounty: CheckUser;
  public tokenSwap: CheckUser;

  constructor() {
    const bountyActions = new HttpActions(getEnvParams().bountyApiUrl);
    const tokenSwapActions = new HttpActions(getEnvParams().tokenSwapApiUrl);

    this.bounty = new CheckUser(bountyActions);
    this.tokenSwap = new CheckUser(tokenSwapActions);
  }
}

export default Api;
