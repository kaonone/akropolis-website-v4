import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';
import { CurrentEvents, PastEvents } from 'modules/sections';

import { IEvent } from 'shared/types/models';
import { AnchorName } from 'shared/types/common';

function Events(props: RouteComponentProps) {
  const { location, history } = props;
  const [selectedPastEvent, selectPastEvent] = React.useState<IEvent | null>(null);

  const handlePastEventClick = React.useCallback((event: IEvent | null) => {
    selectPastEvent(event);
    const eventsAnchor: AnchorName = 'events';
    history.push({ pathname: location.pathname, hash: eventsAnchor });
  }, []);

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <CurrentEvents customEvent={selectedPastEvent} onChangeSelectedEvent={handlePastEventClick.bind(null, null)} />
      <PastEvents onEventClick={handlePastEventClick} />
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default Events;
