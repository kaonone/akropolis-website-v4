import * as React from 'react';
import { Form } from 'react-final-form';

import { useDeps } from 'core/DepsReactContext';
import { MarkAs } from '_helpers';
import { ITranslateKey } from 'services/i18n';
import { TextInputField, RecaptchaField } from 'shared/view/form';
import { Button, Grid, Preloader, Typography } from 'shared/view/elements';
import { isRequired, isEthereumAddress } from 'shared/validators';
import { IUser, UserError } from 'shared/types/models';
import { parseUserError } from 'shared/helpers/errors';

import { translations } from '../../../constants';
import { ICheckAddressFormData, CheckType } from '../../../namespace';

import { useStyles } from './CheckAddressForm.style';

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
    address: isRequired(String(values.address).trim()) || isEthereumAddress(String(values.address).trim()),
    recaptcha: isRequired(values.recaptcha),
  };
}

interface IProps {
  type: CheckType;
  onSuccess(user: IUser): void;
  onError(error: UserError): void;
}

export function CheckAddressForm(props: IProps) {
  const classes = useStyles();
  const { onSuccess, onError, type } = props;
  const deps = useDeps();

  const api = React.useMemo(() => {
    return {
      tokenSwap: deps.api.tokenSwap,
    }[type];
  }, [type]);

  const onSubmit = React.useCallback(
    async (values: ICheckAddressFormData) => {
      try {
        const user = await api.checkAddress(values.address.trim(), String(values.recaptcha));
        onSuccess(user);
      } catch (e) {
        onError(parseUserError(e));
      }
    },
    [onSuccess, onError, api],
  );

  return (
    <div>
      <Form<ICheckAddressFormData>
        onSubmit={onSubmit}
        subscription={{ submitting: true, invalid: true }}
        initialValues={initialValues}
        validate={validateForm}
      >
        {({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography>{translations.form.address}</Typography>
              </Grid>
              <Grid item>
                <TextInputField className={classes.field} name={fieldNames.address} variant="outlined" fullWidth />
              </Grid>
              <Grid item container wrap="nowrap" justify="center" className={classes.captcha}>
                <RecaptchaField name={fieldNames.recaptcha} />
              </Grid>
              <Grid item container wrap="nowrap" justify="center">
                <Button
                  className={classes.submitButton}
                  type="submit"
                  color="gradient"
                  variant="contained"
                  disabled={submitting || invalid}
                >
                  {!submitting && 'Check Account'}
                  {<Preloader size={24} isShown={submitting} />}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    </div>
  );
}
