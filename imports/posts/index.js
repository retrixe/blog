// @flow
// Import React and isomorphic-fetch.
import * as React from "react";
import Post from "./post";

// Our Posts element.
export default class Posts extends React.PureComponent<void, {}, Object> {
  constructor() {
    super();

    this.state = {};
  }

  state: {}

  render() {
    return (
      <div>
        <div style={{ height: "4em" }} />
        <Post metadata={{ name: "The working of chocolate.", date: "2/3/2017", markup: "I must admit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla convallis ante non elementum. Etiam eget finibus nisl, vitae eleifend leo. Suspendisse at laoreet ante. Morbi feugiat augue eu elementum tincidunt. Praesent tincidunt congue egestas. Phasellus hendrerit eleifend ante, nec scelerisque lacus. Suspendisse tincidunt tincidunt posuere. Morbi id nulla a ex commodo pellentesque. Phasellus risus libero, volutpat vitae aliquet nec, malesuada quis est. Duis viverra, metus eu gravida maximus, ipsum nulla egestas elit, sit amet vulputate nunc arcu id ante. Donec cursus purus nec libero ullamcorper, facilisis tristique tortor mattis." }} />
      </div>
    );
  }
}
