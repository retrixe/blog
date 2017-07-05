// @flow
/* eslint-disable react/no-unescaped-entities */
// Import React and material-ui.
import * as React from "react";
import { Paper, Typography, Button } from "material-ui";
import { withStyles, createStyleSheet } from "material-ui/styles";

// Type for our props and stylesheet.
type propType = {
  metadata: {
    name: string,
    markup: string,
    date: string,
  },
  classes: {
    root: string,
    button: string,
  },
}
type themeType = {
  mixins: {
    gutters: Function
  }
}
/* eslint-enable no-undef */

// A bit of styling for our Post component.
const styleSheet = createStyleSheet("PaperSheet", (theme: themeType) => ({
  root: theme.mixins.gutters({
    paddingTop: 12,
    paddingBottom: 12,
  }),
  button: {
    marginTop: 6,
    padding: "4px",
  },
}));

// Let's define our Posts component.
const Post = (props: propType) => {
  const minutesToRead = Math.round(props.metadata.markup.split(" ").length / 60);
  const date = `Written on ${props.metadata.date} | ${minutesToRead} minute read.`;
  return (
    <Paper elevation={4} className={props.classes.root}>
      <Typography type="headline" component="h3" align="center">{props.metadata.name}</Typography>
      <Typography type="subheading" component="h5" align="center">{date}</Typography>
      <div style={{ height: 4 }} />
      <Typography
        type="body1"
        component="p"
        dangerouslySetInnerHTML={{
          __html: props.metadata.markup,
        }}
      />
      <Button className={props.classes.button} color="accent">Read more</Button>
    </Paper>
  );
};

// Styled Post component.
const PostWithStyling = withStyles(styleSheet)(Post);

// Our Posts element.
// eslint-disable-next-line react/prefer-stateless-function
export default class Posts extends React.PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  state: {}


  render() {
    return (
      <div>
        <div style={{ height: "4em" }} />
        <PostWithStyling metadata={{ name: "The working of chocolate.", date: "2/3/2017", markup: "I must admit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla convallis ante non elementum. Etiam eget finibus nisl, vitae eleifend leo. Suspendisse at laoreet ante. Morbi feugiat augue eu elementum tincidunt. Praesent tincidunt congue egestas. Phasellus hendrerit eleifend ante, nec scelerisque lacus. Suspendisse tincidunt tincidunt posuere. Morbi id nulla a ex commodo pellentesque. Phasellus risus libero, volutpat vitae aliquet nec, malesuada quis est. Duis viverra, metus eu gravida maximus, ipsum nulla egestas elit, sit amet vulputate nunc arcu id ante. Donec cursus purus nec libero ullamcorper, facilisis tristique tortor mattis." }} />
      </div>
    );
  }
}
