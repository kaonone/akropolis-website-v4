import * as React from 'react';
import { GetProps } from '_helpers';

import PageBlock from 'modules/shared/PageBlock/PageBlock';
import { Grid } from 'shared/view/elements';
import Product from './Product/Product';

const products: Array<GetProps<typeof Product>['type']> = ['hackathon0x', 'chamaNetwork'];

function Products() {
  return (
    <PageBlock xsVPadding={1} mdVPadding={2} lgVPadding={12} anchorName="products">
      <Grid container spacing={2}>
        {products.map(item => (
          <Grid item container xs={12} md={6} key={item}>
            <Product type={item} />
          </Grid>
        ))}
      </Grid>
    </PageBlock>
  );
}

export default Products;
