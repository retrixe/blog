/* eslint-env browser */
/* eslint-disable react/no-unescaped-entities */
// Import React components.
import * as React from "react";
import { render } from "react-dom";
// Import Material-UI theming and components.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar, Toolbar, Typography } from "material-ui";
// Import Post component.
import Posts from "../imports/posts";


const App = () => {
  let muiTheme; // eslint-disable-line
  return (
    <MuiThemeProvider>
      <div>
        <AppBar style={{ position: "fixed" }}>
          <Toolbar><Typography type="title" color="inherit">{"retrixe's blog"}</Typography></Toolbar>
        </AppBar>
        <Posts />
      </div>
    </MuiThemeProvider>
  );
};

render(<App />, document.getElementById("app"));
