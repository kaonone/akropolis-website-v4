import { createContext, useContext } from 'react';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConnectionStatus, ConnectResult } from '@web3-wallets-kit/core';

import { Communication } from 'utils/react';
import { WalletType } from 'services/api';

export interface AuthWeb3Manager {
  account$: Observable<string | null>;
  status$: BehaviorSubject<ConnectionStatus>;
  connect: (wallet: WalletType) => Promise<ConnectResult>;
  disconnect: () => void;
  connectedWallet$: BehaviorSubject<WalletType | null>;
}

export const AuthContext = createContext<AuthContext | null>(null);

export interface AuthContext {
  web3Manager: AuthWeb3Manager;
  connectCommunication: Communication<AuthWeb3Manager['connect'], {}>;
  openModal: (connectRedirectPath?: string) => void;
  closeModal: () => void;
}

export function useAuthContext(): AuthContext {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthContext is not found');
  }
  return context;
}
