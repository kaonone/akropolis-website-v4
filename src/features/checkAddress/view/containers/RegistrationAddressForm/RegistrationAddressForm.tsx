import * as React from 'react';
import { Form } from 'react-final-form';
import { useDeps } from 'core';

import { MarkAs } from '_helpers';
import { BOUNTY_T_AND_C_URL, TOKEN_SWAP_T_AND_C_URL } from 'assets';
import { ITranslateKey } from 'services/i18n';
import { TextInputField, CheckboxInputField, RecaptchaField } from 'shared/view/form';
import { Button, Grid, CircleProgressBar, Link } from 'shared/view/elements';
import { isRequired, isEthereumAddress } from 'shared/validators';
import { IUser, UserError } from 'shared/types/models';
import { parseUserError } from 'shared/helpers/errors';
import { WHITE_SPACE } from 'core/constants';

import { translations } from '../../../constants';
import { IRegistrationFormData, CheckType, IRegisterUserApi } from '../../../namespace';

import { StylesProps, provideStyles } from './RegistrationAddressForm.style';

const tcUrlByType: Record<CheckType, string> = {
  bounty: BOUNTY_T_AND_C_URL,
  tokenSwap: TOKEN_SWAP_T_AND_C_URL,
};

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

interface IOwnProps {
  type: CheckType;
  onSuccess(user: IUser): void;
  onError(error: UserError): void;
}

type IProps = IOwnProps & StylesProps;

function RegistrationAddressForm(props: IProps) {
  const { onSuccess, onError, classes, type } = props;
  const deps = useDeps();

  const apiByType: Record<CheckType, IRegisterUserApi> = {
    bounty: deps.api.bounty,
    tokenSwap: deps.api.tokenSwap,
  };

  const onSubmit = React.useMemo(() => {
    return async (values: IRegistrationFormData) => {
      try {
        const user = await apiByType[type].registerUser(values.address, String(values.recaptcha));
        onSuccess(user);
      } catch (e) {
        onError(parseUserError(e));
      }
    };
  }, [onSuccess, onError, type]);

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
              label={translations.form.address}
              fullWidth
            />
            <div className={classes.checkBoxField}>
              <CheckboxInputField
                name={fieldNames.isNotResident}
                label={translations.form.notResident}
                labelClasses={{ label: classes.terms }}
              />
            </div>
            <div className={classes.checkBoxField}>
              <CheckboxInputField
                name={fieldNames.isConfirmTerms}
                label={translations.form.acceptTerms}
                labelClasses={{ label: classes.terms }}
              />
              {WHITE_SPACE}
              <Link className={classes.terms} href={tcUrlByType[type]}>{'Terms & Conditions'}</Link>
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
                {!submitting && translations.form.submit}
                {submitting && <CircleProgressBar size={24} />}
              </Button>
            </Grid>
          </form>);
      }}
    </Form>
  );
}

export default provideStyles(RegistrationAddressForm);
