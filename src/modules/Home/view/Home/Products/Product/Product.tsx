import * as React from 'react';

import { StylesProps, provideStyles } from './Product.style';
import { Preview } from 'shared/view/components';
import { useTranslate } from 'services/i18n';

type ProductType = '0x-hackathon' | 'chama-network';

interface IProps {
  type: ProductType;
}

function Product(props: IProps & StylesProps) {
  const { classes, type } = props;
  const { t, tKeys } = useTranslate();
  return (
    <div className={classes.root}>
      <div className={classes.header}>Header</div>
      <div className={classes.preview}>
        <Preview
          title={t(tKeys.modules.home.products[type].title.getKey())}
          description={t(tKeys.modules.home.products[type].description.getKey())}
          moreLink={t(tKeys.modules.home.products[type].link.getKey())}
        />
      </div>
    </div>
  );
}

export default provideStyles(Product);
