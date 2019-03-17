import * as React from 'react';
import { withStyles, Theme, WithStyles } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = (_theme: Theme) => ({
  img: rule({
    display: 'block',
  }),
});

export type StylesProps = WithStyles<typeof styles>;

interface IProps {
  x1: string;
  x2: string;
  type: string;
  alt: string;
  title: string;
  className?: string;
  fullWidth?: boolean;
}

function Picture(props: IProps & StylesProps) {
  const { x1, x2, type, alt, title, fullWidth, className, classes } = props;
  return (
    <picture className={className}>
      <source srcSet={`${x1} 1x, ${x2} 2x`} type={type} />
      <img src={x1} alt={alt} title={title} width={fullWidth ? '100%' : undefined} className={classes.img} />
    </picture>
  );
}

export default withStyles(styles)(Picture);
