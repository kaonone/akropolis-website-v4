import * as React from 'react';
import { GetProps } from '_helpers';

import { Grid } from 'shared/view/elements';
import Product from './Product/Product';

const products: Array<GetProps<typeof Product>['type']> = ['0x-hackathon', 'chama-network'];

function Products() {
  return (
    <Grid container spacing={16}>
      {products.map(item => (
        <Grid item container xs={12} md={6} key={item}>
          <Product type={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
