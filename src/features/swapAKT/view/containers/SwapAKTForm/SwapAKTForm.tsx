import * as React from 'react';
import { Form } from 'react-final-form';

import { getWeb3, checkNetwork } from 'shared/helpers/web3';
import { web3Providers } from 'core/contract/web3';
import { Provider } from 'shared/types/models';
import { NumberInputField } from 'shared/view/form';
import { Button } from 'shared/view/elements';

import { sendTransaction } from '../../../transaction';
import { ISwapAKTFormData } from '../../../namespace';

import { StylesProps, provideStyles } from './SwapAKTForm.style';

const mockTransactionAddress = '0xABb42A131c201155FbA1242C99924F3C2748855d';

const provider: Provider = web3Providers.wallet;

const fieldNames: { [key in keyof ISwapAKTFormData]: key } = {
  tokenAmount: 'tokenAmount',
};

const initialValue: ISwapAKTFormData = {
  tokenAmount: 1,
};

type IProps = StylesProps;

function SwapAKTForm(_props: IProps) {
  const web3 = getWeb3(provider);

  const { isMetaMask, isValidNetwork } = checkNetwork(web3);
  console.log(isMetaMask, isValidNetwork); // WIP

  const onSubmit = React.useCallback(async (values: ISwapAKTFormData) => {
    await sendTransaction({ to: mockTransactionAddress, value: String(values.tokenAmount) });
  }, []);

  return (
    <Form onSubmit={onSubmit} subscription={{ submitting: true }} initialValues={initialValue}>
      {({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <NumberInputField name={fieldNames.tokenAmount} />
          <Button
            type="submit"
            disabled={submitting}
          >
            submit
          </Button>
        </form>)}
    </Form>
  );
}

export default provideStyles(SwapAKTForm);
