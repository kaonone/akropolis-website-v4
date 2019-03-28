import * as React from 'react';
import { Snackbar, Button, Link } from 'shared/view/elements';
import privacyUrl from 'assets/Akropolis_Privacy_Policy.pdf';

const HIDE_COOKIES_MSG_KEY = 'hideCookiesMsg';

function CookiesMsg() {
  const [isOpenedMsg, setIsOpenedMsg] = React.useState(false);

  React.useEffect(() => {
    try {
      const hideMsg: boolean = JSON.parse(localStorage.getItem(HIDE_COOKIES_MSG_KEY) || 'false');
      setIsOpenedMsg(!hideMsg);
    } catch {
      //
    }
  }, []);

  const handleClose = React.useCallback(() => {
    try {
      localStorage.setItem(HIDE_COOKIES_MSG_KEY, JSON.stringify(true));
    } finally {
      setIsOpenedMsg(false);
    }
  }, []);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpenedMsg}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={(
        <span id="message-id">
          {'We use cookies on our website. '}
          {'By continuing to use the site, or by clicking "I agree", you consent to the use of cookies. '}
          {'For more info '}
          <Link href={privacyUrl} target="_blank" rel="noopener noreferrer">click here</Link>
        </span>
      )}
      action={[
        <Button key="agree" color="primary" variant="outlined" size="small" onClick={handleClose}>
          I agree
        </Button>,
      ]}
    />
  );
}

export default CookiesMsg;
