import HttpActions from './HttpActions';
import { CheckUser } from './entities';
import getEnvParams from 'core/getEnvParams';
import Sumsub from './entities/Sumsub';

class Api {
  public tokenSwap: CheckUser;
  public sumsub: Sumsub;

  constructor() {
    const tokenSwapActions = new HttpActions(getEnvParams().tokenSwapApiUrl);
    const sumsubActions = new HttpActions(getEnvParams().sumsubAccessTokenUrl);

    this.tokenSwap = new CheckUser(tokenSwapActions);
    this.sumsub = new Sumsub(sumsubActions);
  }
}

export default Api;
