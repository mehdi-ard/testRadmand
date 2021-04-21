import React from 'react';
import jss from 'jss';
import { ThemeProvider } from 'react-jss';

import jssPluginCompose from 'jss-plugin-compose';

const jssCreate = jss.createUseStyles({
  plugins: [jssPluginCompose()],
});

function Jss(props) {
  return <ThemeProvider jss={jssCreate}>{props.children}</ThemeProvider>;
}

export default Jss;
