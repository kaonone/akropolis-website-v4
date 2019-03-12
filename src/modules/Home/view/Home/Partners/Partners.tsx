import * as React from 'react';
import partners from 'data/partners';
import { Grid } from 'shared/view/elements';
import PartnerCard from './PartnerCard';

function Partners() {
  return (
    <Grid container spacing={16} justify="center">
      {partners.map(item => (
        <Grid key={item.url} item xs={6} md={4} lg={3}>
          <PartnerCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Partners;
