import React from 'react';
import { inIframe } from 'shared/helpers';
import CookiesMsg from './CookiesMsg/CookiesMsg';

class App extends React.Component {
  public render() {
    const { children } = this.props;

    const showCookiesMsg = !inIframe();

    return (
      <>
        {children}
        {showCookiesMsg && <CookiesMsg />}
      </>
    );
  }
}

export default App;
