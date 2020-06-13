// tslint:disable-next-line:import-blacklist
import injectSheet, { Theme, WithStyles, SheetsRegistry, JSS, CSSProperties, JssProvider } from 'react-jss';
import { withStyles as withStyleSheet } from '@material-ui/core/styles';

const withStyles = withStyleSheet as typeof injectSheet;

export { withStyles, Theme, WithStyles, SheetsRegistry, JSS, CSSProperties, JssProvider };
