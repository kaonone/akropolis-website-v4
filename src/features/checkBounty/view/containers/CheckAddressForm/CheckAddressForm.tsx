import * as React from 'react';
import { Form } from 'react-final-form';
import { useDeps } from 'core';

import { tKeys as tKeysAll, useTranslate, ITranslateKey } from 'services/i18n';
import { TextInputField, RecaptchaField } from 'shared/view/form';

import { Button, Grid, CircleProgressBar } from 'shared/view/elements';
import { isRequired, isEthereumAddress } from 'shared/validators';
import { IUser, UserError } from 'shared/types/models';
import { MarkAs } from '_helpers';

import { ICheckAddressFormData } from '../../../namespace';

import { StylesProps, provideStyles } from './CheckAddressForm.style';
import { parseUserError } from 'shared/helpers/errors';

const fieldNames: { [key in keyof ICheckAddressFormData]: key } = {
  recaptcha: 'recaptcha',
  address: 'address',
};

const initialValues: ICheckAddressFormData = {
  address: '',
  recaptcha: '',
};

function validateForm(values: ICheckAddressFormData): Partial<MarkAs<ITranslateKey, ICheckAddressFormData>> {
  return {
    address: isRequired(values.address) || isEthereumAddress(values.address),
    recaptcha: isRequired(values.recaptcha),
  };
}

const tKeys = tKeysAll.features.checkBounty;

interface IOwnProps {
  onSuccess(user: IUser): void;
  onError(error: UserError): void;
}

type IProps = IOwnProps & StylesProps;

function CheckAddressForm(props: IProps) {
  const { onSuccess, classes, onError } = props;
  const { t } = useTranslate();
  const deps = useDeps();

  const onSubmit = React.useMemo(() => {
    return async (values: ICheckAddressFormData) => {
      try {
        const user = await deps.api.user.checkAddress(values.address, String(values.recaptcha));
        onSuccess(user);
      } catch (e) {
        onError(parseUserError(e));
      }
    };
  }, [onSuccess, onError]);

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        subscription={{ submitting: true, invalid: true }}
        initialValues={initialValues}
        validate={validateForm}
      >
        {({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit}>
            <TextInputField
              className={classes.field}
              name={fieldNames.address}
              label={t(tKeys.form.address.getKey())}
              fullWidth
            />
            <Grid container wrap="nowrap" justify="center" className={classes.captcha}>
              <RecaptchaField name={fieldNames.recaptcha} />
            </Grid>
            <Grid container wrap="nowrap" justify="center">
              <Button
                className={classes.submitButton}
                type="submit"
                color="gradient"
                variant="contained"
                disabled={submitting || invalid}
              >
                {!submitting && 'Check Account'}
                {submitting && <CircleProgressBar size={24} />}
              </Button>
            </Grid>
          </form>)}
      </Form>
    </div>
  );
}

export default provideStyles(CheckAddressForm);
