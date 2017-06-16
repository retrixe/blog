/* eslint-env browser */
// Import React components.
import React from "react";
import { render } from "react-dom";
// Import Material-UI theming and components.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar, Toolbar, Typography } from "material-ui";
// Import Post component.
import Posts from "./components/posts";


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
