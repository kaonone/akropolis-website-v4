import * as React from 'react';

import { useTranslate } from 'services/i18n';
import { Button, Modal } from 'shared/view/elements';
import { StylesProps, provideStyles } from './Intro.style';
import { Lang } from 'services/i18n/namespace';
import { Adaptive } from 'services/adaptability';

const videoByLang: Record<Lang, string> = {
  en: 'https://www.youtube.com/embed/WVWxCgzPihc',
  ko: 'https://www.youtube.com/embed/WVWxCgzPihc',
  vi: 'https://www.youtube.com/embed/WVWxCgzPihc',
  zh: 'https://www.youtube.com/embed/WVWxCgzPihc',
};

function Intro(props: StylesProps) {
  const { classes, theme } = props;
  const { t, tKeys } = useTranslate();
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
        <>
          <Adaptive to="md">
            <Video width={theme ? theme.breakpoints.values.sm : 0} />
          </Adaptive>
          <Adaptive from="md" to={860}>
            <Video width={theme ? theme.breakpoints.values.md : 0} />
          </Adaptive>
          <Adaptive from={860}>
            <Video width={860} />
          </Adaptive>
        </>
      </Modal>
    </div >
  );
}

function Video({ width }: { width: number }) {
  const { locale } = useTranslate();
  return (
    <iframe
      style={{ maxWidth: '100vw' }}
      width={width}
      height={Math.floor(width * 0.5625)}
      src={videoByLang[locale]}
      frameBorder={0}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default provideStyles(Intro);
