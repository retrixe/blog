// @flow
/* eslint-disable react/no-unescaped-entities */
// Import React components.
import * as React from "react";
import Head from "next/head";
// Import Material-UI theming and components.
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { AppBar, Toolbar, Typography } from "material-ui";
// Import Post component.
import Posts from "../imports/posts";


export default () => {
  let muiTheme; // eslint-disable-line
  return (
    <div>
      <Head>
        <title>retrixe's blog</title>
      </Head>
      <MuiThemeProvider>
        <div>
          <AppBar style={{ position: "fixed" }}>
            <Toolbar><Typography type="title" color="inherit">{"retrixe's blog"}</Typography></Toolbar>
          </AppBar>
          <Posts />
        </div>
      </MuiThemeProvider>
    </div>
  );
};
