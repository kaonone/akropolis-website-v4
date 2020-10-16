import * as React from 'react';
import { FormState } from 'final-form';
import { Form, FormSpy } from 'react-final-form';
import { equals } from 'ramda';
import DialogContent from '@material-ui/core/DialogContent';

import { useDeps } from 'core/DepsReactContext';
import { WHITE_SPACE } from 'core/constants';
import { MarkAs } from '_helpers';
import { TOKEN_SWAP_T_AND_C_URL, PRIVACY_POLICY_URL } from 'assets';
import { ITranslateKey } from 'services/i18n';
import { CheckUserActionType } from 'services/api/types';
import { TextInputField, CheckboxInputField, RecaptchaField } from 'shared/view/form';
import { Box, Button, Grid, Preloader, Link, Dialog, Typography } from 'shared/view/elements';
import { isRequired, isEthereumAddress } from 'shared/validators';
import { IUser, UserError } from 'shared/types/models';
import { parseUserError } from 'shared/helpers/errors';

import { translations } from '../../../constants';
import { IRegistrationFormData, CheckType } from '../../../namespace';
import { useStyles } from './RegistrationAddressForm.style';

const tcUrlByType: Record<CheckType, string> = {
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

interface IProps {
  type: CheckType;
  onSuccess(user: IUser): void;
  onError(error: UserError): void;
}

const isServer = window.__PRERENDER_INJECTED__ && window.__PRERENDER_INJECTED__.isServer;

export function RegistrationAddressForm(props: IProps) {
  const classes = useStyles();
  const { onSuccess, onError, type } = props;
  const [isExpiredToken, setIsExpiredToken] = React.useState(false);
  const [prevFormState, setPrevFormState] = React.useState(initialValues);

  const isNeedLog = type === 'tokenSwap';

  const deps = useDeps();
  const api = React.useMemo(() => {
    return {
      tokenSwap: deps.api.tokenSwap,
    }[type];
  }, [type]);

  const log: typeof api.log = React.useCallback(
    async (action, payload) => {
      try {
        isNeedLog && (await api.log(action, payload));
      } catch (error) {
        const ignoredActions: CheckUserActionType[] = ['submit_form_succeeded', 'submit_form_failed', 'change_page'];
        !ignoredActions.includes(action) && setIsExpiredToken(true);
      }
    },
    [api, isNeedLog],
  );

  const onSubmit = React.useMemo(() => {
    return async (values: IRegistrationFormData) => {
      log('submit_form', { address: values.address.trim() });
      try {
        const user = await api.registerUser(values.address.trim(), String(values.recaptcha));
        onSuccess(user);
        log('submit_form_succeeded', user);
      } catch (e) {
        onError(parseUserError(e));
        log('submit_form_failed', { code: (e.payload && e.payload.code) || 'unknown' });
      }
    };
  }, [onSuccess, onError, api, log]);

  React.useEffect(() => {
    !isExpiredToken && log('start_registration', { page: type });
  }, [log, isExpiredToken]);

  const makeOnRetryClickHandler = React.useCallback(
    (resetForm: () => void) => () => {
      log('reset_form', {});
      setIsExpiredToken(false);
      resetForm();
    },
    [],
  );

  const handleFormStateChanging = React.useCallback(
    async (state: FormState<IRegistrationFormData>) => {
      const { address, isConfirmTerms, isNotResident, isUnderstandPersonalData } = state.values;
      if (equals(initialValues, state.values)) {
        return;
      }
      setPrevFormState(state.values);
      // tslint:disable: max-line-length
      return Promise.all([
        prevFormState.address !== address ? log('enter_address', { address }) : Promise.resolve(),
        prevFormState.isConfirmTerms !== isConfirmTerms
          ? log('accept_terms', { nextValue: isConfirmTerms.toString() })
          : Promise.resolve(),
        prevFormState.isNotResident !== isNotResident
          ? log('accept_is_not_resident', { nextValue: isNotResident.toString() })
          : Promise.resolve(),
        prevFormState.isUnderstandPersonalData !== isUnderstandPersonalData
          ? log('accept_personal_data_processing', { nextValue: isUnderstandPersonalData.toString() })
          : Promise.resolve(),
      ]);
      // tslint:enable: max-line-length
    },
    [prevFormState],
  );

  const tcLink = (
    <Link color="textPrimary" key="tc" href={tcUrlByType[type]} target="_blank" rel="noopener noreferrer">
      {'Terms & Conditions'}
    </Link>
  );
  const ppLink = (
    <Link color="textPrimary" key="pp" href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
      {'Privacy Policy'}
    </Link>
  );

  return (
    <Form<IRegistrationFormData>
      onSubmit={onSubmit}
      subscription={{ submitting: true, values: true, invalid: true }}
      initialValues={initialValues}
      validate={validateForm}
    >
      {({ handleSubmit, submitting, values, invalid, form }) => {
        const { reset } = form;
        const { isConfirmTerms, isNotResident } = values;
        return (
          <form onSubmit={handleSubmit}>
            {isNeedLog && (
              <>
                <Dialog
                  open={!isServer && isExpiredToken}
                  onClose={makeOnRetryClickHandler(reset)}
                  className={classes.dialog}
                >
                  <DialogContent className={classes.dialog}>
                    <Grid container direction="column" spacing={4}>
                      <Grid item>
                        <Typography>Your registration session is expired.</Typography>
                      </Grid>
                      <Box clone alignSelf="flex-end">
                        <Grid item>
                          <Button onClick={makeOnRetryClickHandler(reset)} color="gradient" variant="contained">
                            Retry
                          </Button>
                        </Grid>
                      </Box>
                    </Grid>
                  </DialogContent>
                </Dialog>
                <FormSpy onChange={handleFormStateChanging} />
              </>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>{translations.form.address}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextInputField required name={fieldNames.address} variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <CheckboxInputField
                  required
                  name={fieldNames.isConfirmTerms}
                  label={
                    <>
                      {translations.form.acceptTerms}
                      {WHITE_SPACE}
                      {tcLink}
                    </>
                  }
                />
              </Grid>
              <Grid item>
                <CheckboxInputField
                  required
                  name={fieldNames.isNotResident}
                  label={translations.form.notResident[type]}
                />
              </Grid>
              {type === 'tokenSwap' && (
                <Grid item>
                  <CheckboxInputField
                    required
                    name={fieldNames.isUnderstandPersonalData}
                    label={
                      <>
                        {translations.form.personalData.map(
                          (item) => (item === 'PP_ANCHOR' && ppLink) || (item === 'T&C_ANCHOR' && tcLink) || item,
                        )}
                      </>
                    }
                  />
                </Grid>
              )}{' '}
              <Grid item container justify="center" className={classes.captcha}>
                <RecaptchaField name={fieldNames.recaptcha} />
              </Grid>
              <Grid item container wrap="nowrap" justify="center">
                <Button
                  type="submit"
                  color="gradient"
                  variant="contained"
                  disabled={submitting || invalid || !isConfirmTerms || !isNotResident}
                >
                  {!submitting && translations.form.submit}
                  {<Preloader size={24} isShown={submitting} />}
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    </Form>
  );
}
