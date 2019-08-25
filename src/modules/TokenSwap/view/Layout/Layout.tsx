import * as React from 'react';
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router';

import { useDeps } from 'core';
import { Kyc } from 'shared/view/components';
import { Grid } from 'shared/view/elements';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';
import routes from 'modules/routes';

import Preview from '../Preview/Preview';
import RegisterUser from '../RegisterUser/RegisterUser';
import CheckUserAddress from '../CheckUserAddress/CheckUserAddress';
import { StylesProps, provideStyles } from './Layout.style';

type IProps = StylesProps & RouteComponentProps;

function TokenSwapLayout(props: IProps) {
  const { classes } = props;
  const deps = useDeps();
  const [isRegistered, setIsRegistered] = React.useState(false);

  React.useEffect(() => {
    return props.history.listen(location => {
      deps.api.tokenSwap.log('change_page', { toPage: location.pathname });
    });
  }, []);

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Intro>
        <Grid container direction="column" alignItems="stretch" className={classes.root}>
          <div className={classes.content}>
            <p className={classes.title}>{'Token Swap'}</p>
            <div className={classes.children}>
              <Switch>
                <Route
                  exact
                  path={routes.tokenswap.getRoutePath()}
                  component={Preview}
                />
                <Route
                  exact
                  path={routes.tokenswap.registration.getRoutePath()}
                >
                  <RegisterUser onSuccess={setIsRegistered.bind(null, true)} />
                </Route>
                <Route
                  exact
                  path={routes.tokenswap.check.getRoutePath()}
                  component={CheckUserAddress}
                />
                {isRegistered && (
                  <Route exact path={routes.tokenswap.kyc.getRoutePath()} >
                    <Kyc group="tokenswap" />
                  </Route>
                )}
                <Redirect to={routes.tokenswap.getRoutePath()} />
              </Switch>
            </div>
          </div>
        </Grid>
      </Layout.Intro>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(TokenSwapLayout);
