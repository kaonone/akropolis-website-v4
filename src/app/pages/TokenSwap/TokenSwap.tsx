import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router';

import { useDeps } from 'core/DepsReactContext';
import { makeStyles } from 'shared/styles';
import { Kyc } from 'shared/view/components';
import { Grid } from 'shared/view/elements';
import routes from 'app/routes';
import { Layout } from 'app/components/Layout/Layout';
import { Header } from 'app/components/Header/Header';
import { Footer } from 'app/components/Footer/Footer';

import { Preview, RegisterUser, CheckUserAddress } from './components';

export function TokenSwap() {
  const classes = useStyles();
  const history = useHistory();
  const deps = useDeps();

  const [userAddress, setUserAddress] = React.useState<string | null>(null);

  React.useEffect(() => {
    return history.listen(location => {
      deps.api.tokenSwap.log('change_page', { toPage: location.pathname });
    });
  }, []);

  return (
    <Layout>
      <Layout.Header>
        <Header hideThemeButton />
      </Layout.Header>
      <Layout.Container>
        <Grid container direction="column" alignItems="stretch">
          <div className={classes.root}>
            <p className={classes.title}>{'Token Swap'}</p>
            <div className={classes.content}>
              <Switch>
                <Route exact path={routes.tokenswap.getRoutePath()} component={Preview} />
                <Route exact path={routes.tokenswap.registration.getRoutePath()}>
                  <RegisterUser onSuccess={setUserAddress} />
                </Route>
                <Route exact path={routes.tokenswap.check.getRoutePath()} component={CheckUserAddress} />
                {userAddress && (
                  <Route exact path={routes.tokenswap.kyc.getRoutePath()}>
                    <Kyc userAddress={userAddress} group="tokenswap" />
                  </Route>
                )}
                <Redirect to={routes.tokenswap.getRoutePath()} />
              </Switch>
            </div>
          </div>
        </Grid>
      </Layout.Container>
      <Layout.WrapTopWave type="bottom">
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout.WrapTopWave>
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 0),
  },

  title: {
    width: '100%',
    maxWidth: theme.extra.sizes.maxContentWidth,
    margin: `auto`,
    paddingBottom: 16,
    fontSize: 26,
    fontWeight: 'normal',
    lineHeight: 1.38,
    letterSpacing: '-0.2px',
    textAlign: 'center',
    textTransform: 'uppercase',

    [theme.breakpoints.up('md')]: {
      paddingBottom: 24,
      fontSize: 38,
      lineHeight: 1.26,
      letterSpacing: '-0.3px',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: 50,
      lineHeight: 1.21,
      letterSpacing: '-0.5px',
    },
  },

  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: theme.extra.sizes.maxContentWidth,
    margin: `auto`,
  },
}));
