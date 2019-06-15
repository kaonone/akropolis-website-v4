import * as React from 'react';
import { Form } from 'react-final-form';
import { useDeps } from 'core';

import { tKeys as tKeysAll, useTranslate, ITranslateKey } from 'services/i18n';
import { TextInputField } from 'shared/view/form';

import { Button, Grid, Recaptcha, CircleProgressBar } from 'shared/view/elements';
import { isRequired, isEthereumAddress } from 'shared/validators';
import { IUser, UserError } from 'shared/types/models';
import { MarkAs } from '_helpers';

import { IRegistrationFormData } from '../../../namespace';

import { StylesProps, provideStyles } from './CheckAddressForm.style';
import { ApiError, parseUserError } from 'shared/helpers/errors';

const fieldNames: { [key in keyof IRegistrationFormData]: key } = {
  address: 'address',
  isNotResident: 'isNotResident',
  isConfirmTerms: 'isConfirmTerms',
};

const initialValues: IRegistrationFormData = {
  address: '',
  isNotResident: false,
  isConfirmTerms: false,
};

function validateForm(values: IRegistrationFormData): Partial<MarkAs<ITranslateKey, IRegistrationFormData>> {
  return {
    address: isRequired(values.address) || isEthereumAddress(values.address),
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

  const [captcha, setCaptcha] = React.useState('');

  const onSubmit = React.useMemo(() => {
    return async (values: IRegistrationFormData) => {
      try {
        const user = await deps.api.user.checkAddress(values.address, captcha);
        onSuccess(user);
      } catch (e) {
        onError(parseUserError(e));
      }
    };
  }, [captcha, onSuccess]);

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
              <Recaptcha onChange={setCaptcha} />
            </Grid>
            <Grid container wrap="nowrap" justify="center">
              <Button
                className={classes.submitButton}
                type="submit"
                color="gradient"
                variant="contained"
                disabled={submitting || invalid || !captcha}
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
