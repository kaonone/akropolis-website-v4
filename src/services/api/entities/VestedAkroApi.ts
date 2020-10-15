import { map, switchMap } from 'rxjs/operators';
import * as R from 'ramda';
import { ETH_NETWORK_CONFIG, WEB3_LONG_POOLING_TIMEOUT } from 'env';
import { BehaviorSubject, Observable, timer, combineLatest } from 'rxjs';
import {
  TokenAmount, Token,
} from '@akropolis-web/primitives';

import {
  createVestedAkro,
} from 'generated/contracts';
import { getCurrentValueOrThrow } from 'utils/rxjs';
import { memoize } from 'utils/decorators';

import { Contracts, Web3ManagerModule } from '../types';

export class VestedAkroApi {
  private readonlyContract: Contracts['vestedAkro'];
  private txContract = new BehaviorSubject<null | Contracts['vestedAkro']>(null);

  constructor(
    private web3Manager: Web3ManagerModule,
  ) {
    this.readonlyContract = createVestedAkro(
      this.web3Manager.web3,
      ETH_NETWORK_CONFIG.contracts.vestedAkro,
    );
    this.web3Manager.txWeb3$
      .pipe(
        map(
          txWeb3 =>
            txWeb3 && createVestedAkro(txWeb3, ETH_NETWORK_CONFIG.contracts.vestedAkro),
        ),
      )
      .subscribe(this.txContract);
  }

  public getAccount$() {
    return this.web3Manager.account$;
  }

  public unlockAkro(address: string) {
    const txContract = getCurrentValueOrThrow(this.txContract);
    return txContract.methods.unlockAndRedeemAll(undefined, { from: address });
  }

  @memoize(R.identity)
  public getToken$(address: string): Observable<Token> {
    return combineLatest([this.readonlyContract.methods.symbol(), this.readonlyContract.methods.decimals()]).pipe(
      map(([symbol, decimals]) => new Token(address, symbol, decimals.toNumber())),
    );
  }

  @memoize(R.identity)
  public getBalances$(address: string): Observable<any> {
    return timer(0, WEB3_LONG_POOLING_TIMEOUT).pipe(
      switchMap(() =>
        combineLatest([
          this.readonlyContract.methods.balanceInfoOf({ account: address }, [
            this.readonlyContract.events.Transfer({ filter: { from: address } }),
            this.readonlyContract.events.Transfer({ filter: { to: address } }),
          ]),
          this.getToken$(address),
        ]),
      ),
      map(([amounts, token]) => amounts.map(amount => new TokenAmount(amount, token))),
    );
  }
}
