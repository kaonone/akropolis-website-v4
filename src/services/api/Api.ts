import HttpActions from './HttpActions';
import { CheckUser, Web3Manager, VestedAkroApi } from './entities';
import getEnvParams from 'core/getEnvParams';
import Sumsub from './entities/Sumsub';

class Api {
  public tokenSwap: CheckUser;
  public sumsub: Sumsub;
  public web3Manager: Web3Manager;
  public vestedAkroApi: VestedAkroApi;

  constructor() {
    const tokenSwapActions = new HttpActions(getEnvParams().tokenSwapApiUrl);
    const sumsubActions = new HttpActions(getEnvParams().sumsubAccessTokenUrl);

    this.tokenSwap = new CheckUser(tokenSwapActions);
    this.sumsub = new Sumsub(sumsubActions);
    this.web3Manager = new Web3Manager();
    this.vestedAkroApi = new VestedAkroApi(this.web3Manager);
  }
}

export default Api;
