import * as React from 'react';

import { getWeb3, isMetaMask, isValidNetwork, getAccounts } from 'shared/helpers/web3';
import { web3Providers } from 'core/contract/web3';
import { Provider } from 'shared/types/models';
import { RetryModal } from 'shared/view/components';

import { SwapDescription, SwapTokens } from '../../components';

import { sendAllTokens } from 'features/swapAKT/actions';

const translations = {
  notEthereumConnection: 'No connection to the Ethereum network',
  // tslint:disable-next-line: max-line-length
  unSupportedNetwork: 'We can\'t find any Ethereum accounts! Please check and make sure Metamask or your browser are pointed at the correct network and your account is unlocked.',
  retry: 'Retry',
  unknownError: 'Unknown error',
  somethingWentWrong: 'Something went wrong',
};

// const mockTransactionAddress = '0xABb42A131c201155FbA1242C99924F3C2748855d';
const mockTransactionAddress = '0xBF6FD43A7C136d52394B4Ce9B579C606f4B7632B';

const metaMaskUrl = 'https://metamask.io/';

const provider: Provider = web3Providers.wallet;

export default function SwapAKTForm() {
  const web3 = getWeb3(provider);

  const [error, setError] = React.useState('');
  const [isSending, setIsSending] = React.useState(false);

  const isUseMetaMask = isMetaMask();

  const openMetamask = React.useCallback(async () => {
    try {
      setIsSending(true);
      if (!isUseMetaMask) {
        window.open(metaMaskUrl, '_blank');
        return;
      }

      const isUseValidNetwork = await isValidNetwork(web3);
      const accounts = await getAccounts(web3);
      if (!isUseValidNetwork || accounts.length === 0) {
        setError('invalidNetwork');
        return;
      }

      await sendAllTokens(mockTransactionAddress);
    } catch (error) {
      setError('unknown');
    } finally {
      setIsSending(false);
    }
  }, [isMetaMask]);
  const [isAccept, setIsAccept] = React.useState(false);

  const onAcceptChange = React.useCallback(() => {
    setIsAccept(true);
  }, []);

  return (
    <div>
      {!isAccept && <SwapDescription onAccept={onAcceptChange} />}
      {isAccept &&
        <SwapTokens address={mockTransactionAddress} onSendViaMetaMask={openMetamask} isSending={isSending} />
      }
      <RetryModal
        isOpen={!!error}
        title={error === 'invalidNetwork' ? translations.notEthereumConnection : translations.unknownError}
        buttonText={translations.retry}
        onRetry={setError.bind(null, '')}
        onClose={setError.bind(null, '')}
      >
        {error === 'invalidNetwork' ? translations.unSupportedNetwork : translations.somethingWentWrong}
      </RetryModal>
    </div>
  );
}
