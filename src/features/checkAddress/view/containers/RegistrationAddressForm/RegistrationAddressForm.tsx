import * as React from 'react';
import { FormState } from 'final-form';
import { Form, FormSpy } from 'react-final-form';
import { withRouter, RouteComponentProps } from 'react-router';
import { useDeps } from 'core';
import { equals } from 'ramda';

import { MarkAs } from '_helpers';
import { BOUNTY_T_AND_C_URL, TOKEN_SWAP_T_AND_C_URL, PRIVACY_POLICY_URL } from 'assets';
import { ITranslateKey } from 'services/i18n';
import { CheckUserActionType } from 'services/api/types';
import { TextInputField, CheckboxInputField, RecaptchaField } from 'shared/view/form';
import { Button, Grid, CircleProgressBar, Link, Dialog, DialogTitle, DialogActions } from 'shared/view/elements';
import { isRequired, isEthereumAddress } from 'shared/validators';
import { IUser, UserError } from 'shared/types/models';
import { parseUserError } from 'shared/helpers/errors';
import { WHITE_SPACE } from 'core/constants';

import { translations } from '../../../constants';
import { IRegistrationFormData, CheckType } from '../../../namespace';

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
  isUnderstandPersonalData: 'isUnderstandPersonalData',
};

const initialValues: IRegistrationFormData = {
  address: '',
  recaptcha: '',
  isNotResident: false,
  isConfirmTerms: false,
  isUnderstandPersonalData: false,
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

type IProps = IOwnProps & StylesProps & RouteComponentProps;

const isServer = window.__PRERENDER_INJECTED__ && window.__PRERENDER_INJECTED__.isServer;

function RegistrationAddressForm(props: IProps) {
  const { onSuccess, onError, classes, type } = props;
  const [isExpiredToken, setIsExpiredToken] = React.useState(false);
  const [prevFormState, setPrevFormState] = React.useState(initialValues);

  const isNeedLog = type === 'tokenSwap';

  const deps = useDeps();
  const api = React.useMemo(() => {
    return {
      bounty: deps.api.bounty,
      tokenSwap: deps.api.tokenSwap,
    }[type];
  }, [type]);

  const log: typeof api.log = React.useCallback(async (action, payload) => {
    try {
      isNeedLog && await api.log(action, payload);
    } catch (error) {
      const ignoredActions: CheckUserActionType[] = [
        'submit_form_succeeded', 'submit_form_failed', 'leave_page',
      ];
      !ignoredActions.includes(action) && setIsExpiredToken(true);
    }
  }, [api, isNeedLog]);

  const onSubmit = React.useMemo(() => {
    return async (values: IRegistrationFormData) => {
      log('submit_form', { address: values.address.trim() });
      try {
        const user = await api.registerUser(values.address.trim(), String(values.recaptcha));
        onSuccess(user);
        log('submit_form_succeeded', user);
      } catch (e) {
        onError(parseUserError(e));
        log('submit_form_failed', { code: e.payload && e.payload.code || 'unknown' });
      }
    };
  }, [onSuccess, onError, api, log]);

  React.useEffect(() => {
    !isExpiredToken && log('enter_page', { page: type });
  }, [log, isExpiredToken]);

  React.useEffect(() => {
    return props.history.listen(location => {
      log('leave_page', { toPage: location.pathname });
    });
  }, []);

  const makeOnRetryClickHandler = React.useCallback((resetForm: () => void) => () => {
    log('reset_form', {});
    setIsExpiredToken(false);
    resetForm();
  }, []);

  const handleFormStateChanging = React.useCallback(async (state: FormState) => {
    const { address, isConfirmTerms, isNotResident, isUnderstandPersonalData } = state.values as IRegistrationFormData;
    if (equals(initialValues, state.values)) {
      return;
    }
    setPrevFormState(state.values as IRegistrationFormData);
    // tslint:disable: max-line-length
    return Promise.all([
      prevFormState.address !== address ? log('enter_address', { address }) : Promise.resolve(),
      prevFormState.isConfirmTerms !== isConfirmTerms ? log('accept_terms', { nextValue: isConfirmTerms.toString() }) : Promise.resolve(),
      prevFormState.isNotResident !== isNotResident ? log('accept_is_not_resident', { nextValue: isNotResident.toString() }) : Promise.resolve(),
      prevFormState.isUnderstandPersonalData !== isUnderstandPersonalData ? log('accept_personal_data_processing', { nextValue: isUnderstandPersonalData.toString() }) : Promise.resolve(),
    ]);
    // tslint:enable: max-line-length
  }, [prevFormState]);

  const tcLink = (
    <Link key="tc" href={tcUrlByType[type]} target="_blank" rel="noopener noreferrer">
      {'Terms & Conditions'}
    </Link>
  );
  const ppLink = (
    <Link key="pp" href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
      {'Privacy Policy'}
    </Link>
  );

  const checkBoxLabelClasses = {
    root: classes.labelRoot,
    label: classes.label,
  };

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true, values: true, invalid: true }}
      initialValues={initialValues}
      validate={validateForm}
    >
      {({ handleSubmit, submitting, values, invalid, reset }) => {
        const { isConfirmTerms, isNotResident } = values as IRegistrationFormData;
        return (
          <form onSubmit={handleSubmit}>
            {isNeedLog && (<>
              <Dialog open={!isServer && isExpiredToken} onClose={makeOnRetryClickHandler(reset)}>
                <DialogTitle>Your registration session is expired.</DialogTitle>
                <DialogActions>
                  <Button onClick={makeOnRetryClickHandler(reset)} color="primary" variant="contained">
                    Retry
                  </Button>
                </DialogActions>
              </Dialog>
              <FormSpy onChange={handleFormStateChanging} />
            </>)}
            <TextInputField
              required
              name={fieldNames.address}
              label={translations.form.address}
              fullWidth
            />
            <div className={classes.checkBoxField}>
              <CheckboxInputField
                required
                name={fieldNames.isConfirmTerms}
                label={(
                  <>
                    {translations.form.acceptTerms}
                    {WHITE_SPACE}
                    {tcLink}
                  </>
                )}
                labelClasses={checkBoxLabelClasses}
              />
            </div>
            <div className={classes.checkBoxField}>
              <CheckboxInputField
                required
                name={fieldNames.isNotResident}
                label={translations.form.notResident[type]}
                labelClasses={checkBoxLabelClasses}
              />
            </div>
            {type === 'tokenSwap' && (
              <div className={classes.checkBoxField}>
                <CheckboxInputField
                  required
                  name={fieldNames.isUnderstandPersonalData}
                  label={(
                    <>
                      {translations.form.personalData.map(item => (
                        item === 'PP_ANCHOR' && ppLink ||
                        item === 'T&C_ANCHOR' && tcLink ||
                        item
                      ))}
                    </>
                  )}
                  labelClasses={checkBoxLabelClasses}
                />
              </div>
            )}
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

export default provideStyles(withRouter(RegistrationAddressForm));
