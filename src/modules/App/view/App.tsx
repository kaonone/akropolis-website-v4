import React from 'react';
import CookiesMsg from './CookiesMsg/CookiesMsg';

class App extends React.Component {
  public render() {
    const { children } = this.props;

    return (
      <>
        {children}
        <CookiesMsg />
      </>
    );
  }
}

export default App;
