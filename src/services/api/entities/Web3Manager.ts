import Web3 from 'web3';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { skipUntil } from 'rxjs/operators';
import { autobind } from 'core-decorators';
import { Web3WalletsManager, Connector } from '@web3-wallets-kit/core';
import { InpageConnector } from '@web3-wallets-kit/inpage-connector';
import { FortmaticConnector } from '@web3-wallets-kit/fortmatic-connector';
import { ConnectWalletConnector } from '@web3-wallets-kit/connect-wallet-connector';
import { BitskiConnector } from '@web3-wallets-kit/bitski-connector';
import { PortisConnector } from '@web3-wallets-kit/portis-connector';
import { WalletLinkConnector } from '@web3-wallets-kit/wallet-link-connector';

import getEnvParams from 'core/getEnvParams';
import { Storage, localStorageAdapter } from 'services/storage';
import { ETH_NETWORK_CONFIG } from 'env';

export { ConnectionStatus } from '@web3-wallets-kit/core';

export const wallets = [
  'bitski',
  'web3',
  'connectWallet',
  'fortmatic',
  'portis',
  'walletlink',
] as const;

export type WalletType = typeof wallets[number];

function isWallet(wallet: string): wallet is WalletType {
  return wallets.includes(wallet as WalletType);
}

interface StorageState {
  lastProvider: null | WalletType;
}

const INFURA_API_KEY = 'abe86a1956214927bd8b39477bc6ec88';
export const INFURA_API_KEY_WITH_HISTORY = 'd17ec743acac452d8d5707894840cf24';

const BITSKI_API_KEY = '45e6d1b2-f059-4ebd-8afc-3c1cfa0262a4';
const BITSKI_REDIR_URL = getEnvParams().isDevelopment
  ? 'http://localhost:8080/bitski-callback.html'
  : 'https://pool.akropolis.io/bitski-callback.html';

const FORTMATIC_API_KEY = 'pk_test_508AC5D15FD0D930';

const PORTIS_API_KEY = '891fea88-ae08-471e-958d-1c7dc959fd82';
const ETH_JSONRPC_URL = `https://${ETH_NETWORK_CONFIG.name}.infura.io/v3/${INFURA_API_KEY}`;

const connectors: Record<WalletType, Connector> = {
  web3: new InpageConnector(),
  connectWallet: new ConnectWalletConnector({
    infuraId: INFURA_API_KEY,
    chainId: ETH_NETWORK_CONFIG.id,
  }),
  bitski: new BitskiConnector({ clientId: BITSKI_API_KEY, redirectUri: BITSKI_REDIR_URL }),
  fortmatic: new FortmaticConnector({
    apiKey: FORTMATIC_API_KEY,
    network: ETH_NETWORK_CONFIG.name,
  }),
  portis: new PortisConnector({ apiKey: PORTIS_API_KEY, network: ETH_NETWORK_CONFIG.name }),
  walletlink: new WalletLinkConnector({
    appName: 'Delphi',
    chainId: ETH_NETWORK_CONFIG.id,
    jsonRpcUrl: ETH_JSONRPC_URL,
    darkMode: true,
  }),
};

const initialStorageState: StorageState = {
  lastProvider: null,
};

export class Web3Manager {
  public connectedWallet$ = new BehaviorSubject<WalletType | null>(null);
  private loadAccountTrigger$ = new ReplaySubject<true>();

  private storage = new Storage<[StorageState]>(
    'walletManager',
    localStorageAdapter,
    initialStorageState,
    [],
  );

  private manager = new Web3WalletsManager<Web3>({
    defaultProvider: { network: ETH_NETWORK_CONFIG.name, infuraAccessToken: INFURA_API_KEY },
    makeWeb3: provider => new Web3(provider),
  });

  constructor() {
    this.connectLastProvider();
  }

  get web3() {
    return this.manager.web3;
  }

  get txWeb3$() {
    return this.manager.txWeb3;
  }

  get account$() {
    return this.manager.account.pipe(skipUntil(this.loadAccountTrigger$));
  }

  get chainId$() {
    return this.manager.chainId;
  }

  get status$() {
    return this.manager.status;
  }

  @autobind
  public async disconnect() {
    this.connectedWallet$.next(null);
    this.storage.setItem('lastProvider', null);
    await this.manager.disconnect();
  }

  @autobind
  public async connect(wallet: WalletType) {
    const payload = await this.manager.connect(connectors[wallet]);
    this.connectedWallet$.next(wallet);
    this.storage.setItem('lastProvider', wallet);
    return payload;
  }

  private async connectLastProvider() {
    const lastProvider = this.storage.getItem('lastProvider');

    if (lastProvider && isWallet(lastProvider)) {
      await this.connect(lastProvider);
    }

    this.loadAccountTrigger$.next(true);
  }
}
