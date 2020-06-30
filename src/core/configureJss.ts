import { create } from 'jss';
import jssCompose from 'jss-plugin-compose';
import { jssPreset } from '@material-ui/core/styles';
import { IJssDependencies } from 'shared/types/app';

export function configureJss(): IJssDependencies {
  // Place to add jss-plugins [https://material-ui.com/customization/css-in-js/#plugins]
  const jss = create({ plugins: [...jssPreset().plugins, jssCompose()] });

  return { jss };
}
