import * as React from 'react';

import { useTranslate } from 'services/i18n';
import { Button, Modal } from 'shared/view/elements';
import { StylesProps, provideStyles } from './Intro.style';
import { Lang } from 'services/i18n/namespace';

const videoByLang: Record<Lang, string> = {
  en: 'https://www.youtube.com/embed/-z33EoqNVN0',
  ko: 'https://www.youtube.com/embed/-z33EoqNVN0',
  vi: 'https://www.youtube.com/embed/-z33EoqNVN0',
  zh: 'https://www.youtube.com/embed/-z33EoqNVN0',
};

function Intro(props: StylesProps) {
  const { classes } = props;
  const { t, tKeys, locale } = useTranslate();
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <div className={classes.root}>
      <p className={classes.title}>{t(tKeys.sections.intro.title.getKey())}</p>
      <p className={classes.subtitle}>{t(tKeys.sections.intro.subtitle.getKey())}</p>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        onClick={setIsOpened.bind(null, true)}
      >
        {t(tKeys.sections.intro.watchVideoButton.getKey())}
      </Button>
      <Modal
        open={isOpened}
        onClose={setIsOpened.bind(null, false)}
        classes={{ root: classes.modalRoot }}
        BackdropProps={{
          classes: {
            root: classes.backDropRoot,
          },
        }}
      >
        <iframe
          width={560}
          height={315}
          src={videoByLang[locale]}
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </div >
  );
}

export default provideStyles(Intro);
