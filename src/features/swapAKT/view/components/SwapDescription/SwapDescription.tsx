import * as React from 'react';

import termsURL from 'assets/Akropolis_Terms_and_Conditions.pdf';

import { Button, Typography, Link, Checkbox, Grid } from 'shared/view/elements';

import { StylesProps, provideStyles } from './SwapDescription.style';
import { SUPPORT_EMAIL, WHITE_SPACE } from 'core/constants';

type FormulaArgument = 'newTokens' | 'eth' | 'rate' | 'ppt';

// tslint:disable: max-line-length
const translations = {
  description: 'The amount of New tokens to be issued to early contributors during Token Swap will be calculated based on the following formula:',
  formula: 'New Tokens = 130% * ETH * RATE / PPT, where',
  arguments: {
    newTokens: {
      name: 'New Tokens',
      description: 'means the amount of new tokens issuable to an early contributor;',
    },
    eth: {
      name: 'ETH',
      description: 'means the amount of ETH actually delivered to Akropolis by an early contributor under the ECA concluded between such early contributor and Akropolis;',
    },
    rate: {
      name: 'RATE',
      description: 'means the ETH/USD rate, which is 400$;',
    },
    ppt: {
      name: 'PPT',
      description: 'means the price per token, which is 0.01$;',
    },
  } as Record<FormulaArgument, { name: string, description: string }>,
  conclusion: `Early contributor's tokens are under vesting and will be unlocked in 5 tranches, starting from 2nd month after the IEO. If you have any questions, please contact us via`,
  accept: 'Accept',
};

interface IOwnProps {
  onAccept(): void;
}

type IProps = IOwnProps & StylesProps;

function SwapDescription(props: IProps) {
  const { classes, onAccept } = props;

  const [isAcceptTerms, setIsAcceptTerms] = React.useState(false);

  const toggleTermsChange = React.useCallback(() => {
    setIsAcceptTerms(!isAcceptTerms);
  }, [isAcceptTerms]);

  return (
    <div>
      <Typography variant="body1" className={classes.subTitle}>{translations.description}</Typography>
      <Typography variant="body1" className={classes.subTitle}>{translations.formula}</Typography>
      {(['newTokens', 'eth', 'rate', 'ppt'] as FormulaArgument[]).map(parameter => (
        <Typography key={parameter} variant="body1" className={classes.formulaArgument}>
          <b>{translations.arguments[parameter].name}</b>{WHITE_SPACE}{translations.arguments[parameter].description}
        </Typography>
      ))}
      <Typography variant="body1" className={classes.conclusion}>
        <span>
          {translations.conclusion}
        </span>
        {WHITE_SPACE}
        <Link href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </Link>
      </Typography>
      <Grid container wrap="nowrap" direction="column" alignItems="center">
        <div className={classes.checkBoxField}>
          <Grid container wrap="nowrap" alignItems="center" onClick={toggleTermsChange}>
            <Checkbox checked={isAcceptTerms} />
            {translations.accept}
          </Grid>
          {WHITE_SPACE}
          <Link className={classes.terms} href={termsURL}>{'Terms&Conditions'}</Link>
        </div>
        <Button
          className={classes.acceptButton}
          color="gradient"
          variant="contained"
          onClick={onAccept}
          disabled={!isAcceptTerms}
        >
          {translations.accept}
        </Button>
      </Grid>
    </div>
  );

}

export default provideStyles(SwapDescription);
