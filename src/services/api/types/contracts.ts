/* tslint:disable:interface-over-type-literal */

import {
  createVestedAkro,
} from 'generated/contracts';
import Web3 from 'web3';
import { BehaviorSubject, Observable } from 'rxjs';

export type Contracts = {
  vestedAkro: ReturnType<typeof createVestedAkro>;
};

export interface Web3ManagerModule {
  web3: Web3;
  account$: Observable<string | null>;
  txWeb3$: BehaviorSubject<Web3 | null>;
}
