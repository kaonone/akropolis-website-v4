import * as React from 'react';

import { StylesProps, provideStyles } from './Products.style';
import { GetProps } from '_helpers';
import Product from './Product/Product';

const products: Array<GetProps<typeof Product>['type']> = ['0x-hackathon', 'chama-network'];

function Products(props: StylesProps) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {products.map(item => (
        <div key={item} className={classes.product}>
          <Product type={item} />
        </div>
      ))}
    </div>
  );
}

export default provideStyles(Products);
