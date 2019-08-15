import * as React from 'react';
import ReactIframeResizer from 'react-iframe-resizer-super';

import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { useTranslate } from 'services/i18n';

import { Section } from 'shared/view/components';

function Bnbridge() {
  const { t, tKeys } = useTranslate();

  return (
    <PageBlock xsVPadding={1} mdVPadding={2} lgVPadding={12}>
      <Section title={t(tKeys.sections.bnbridge.title.getKey())}>
        <ReactIframeResizer src="https://akropolisio.github.io/bnbridge.exchange" frameBorder={0} />
      </Section>
    </PageBlock>
  );
}

export default Bnbridge;
