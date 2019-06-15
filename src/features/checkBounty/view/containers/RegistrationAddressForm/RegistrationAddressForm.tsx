import * as React from 'react';
import { Form } from 'react-final-form';
import { useDeps } from 'core';

import { MarkAs } from '_helpers';
import termsURL from 'assets/Akropolis_Terms_and_Conditions.pdf';
import { tKeys as tKeysAll, useTranslate, ITranslateKey } from 'services/i18n';
import { TextInputField, CheckboxInputField, RecaptchaField } from 'shared/view/form';
import { Button, Grid, CircleProgressBar, Link } from 'shared/view/elements';
import { isRequired, isEthereumAddress } from 'shared/validators';
import { IUser, UserError } from 'shared/types/models';
import { parseUserError } from 'shared/helpers/errors';

import { IRegistrationFormData } from '../../../namespace';

import { StylesProps, provideStyles } from './RegistrationAddressForm.style';

const fieldNames: { [key in keyof IRegistrationFormData]: key } = {
  address: 'address',
  recaptcha: 'recaptcha',
  isNotResident: 'isNotResident',
  isConfirmTerms: 'isConfirmTerms',
};

const initialValues: IRegistrationFormData = {
  address: '',
  recaptcha: '',
  isNotResident: false,
  isConfirmTerms: false,
};

function validateForm(values: IRegistrationFormData): Partial<MarkAs<ITranslateKey, IRegistrationFormData>> {
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

function RegistrationAddressForm(props: IProps) {
  const { onSuccess, onError, classes } = props;
  const { t } = useTranslate();
  const deps = useDeps();

  const onSubmit = React.useMemo(() => {
    return async (values: IRegistrationFormData) => {
      try {
        const user = await deps.api.user.registerUser(values.address, String(values.recaptcha));
        onSuccess(user);
      } catch (e) {
        onError(parseUserError(e));
      }
    };
  }, [onSuccess, onError]);

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true, values: true, invalid: true }}
      initialValues={initialValues}
      validate={validateForm}
    >
      {({ handleSubmit, submitting, values, invalid }) => {
        const { isConfirmTerms, isNotResident } = values as IRegistrationFormData;
        return (
          <form onSubmit={handleSubmit}>
            <TextInputField
              name={fieldNames.address}
              label={t(tKeys.form.address.getKey())}
              fullWidth
            />
            <div className={classes.checkBoxField}>
              <CheckboxInputField
                name={fieldNames.isNotResident}
                label={t(tKeys.form.notResident.getKey())}
              />
            </div>
            <div className={classes.checkBoxField}>
              <CheckboxInputField
                name={fieldNames.isConfirmTerms}
                label={t(tKeys.form.acceptTerms.getKey())}
              />{' '}
              <Link className={classes.terms} href={termsURL}>{'Terms&Conditions'}</Link>
            </div>
            <Grid container wrap="nowrap" justify="center" className={classes.captcha}>
              <RecaptchaField name={fieldNames.recaptcha} />
            </Grid>
            <Grid container wrap="nowrap" justify="center">
              <Button
                className={classes.submitButton}
                type="submit"
                color="gradient"
                variant="contained"
                disabled={submitting || invalid || !isConfirmTerms || !isNotResident}
              >
                {!submitting && t(tKeys.form.submit.getKey())}
                {submitting && <CircleProgressBar size={24} />}
              </Button>
            </Grid>
          </form>);
      }}
    </Form>
  );
}

export default provideStyles(RegistrationAddressForm);
