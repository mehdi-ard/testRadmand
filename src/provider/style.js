import withStyles from 'react-jss';
// eslint-disable-next-line
export default (styles) => (component) =>
  withStyles(styles, { withTheme: true })(component);
