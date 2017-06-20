import { Meteor } from "meteor/meteor";
import * as fs from "fs";
import marky from "marky-markdown";

Meteor.methods({
  getPost(postName: string) {
    let metadata = fs.readFileSync("./posts/metadata.json");
    metadata = JSON.parse(metadata);
    const markup = fs.readFileSync(`./posts/${postName}.md`);
    const metadataToReturn = {};
    return {
      markup: "I must admit, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla convallis ante non elementum. Etiam eget finibus nisl, vitae eleifend leo. Suspendisse at laoreet ante. Morbi feugiat augue eu elementum tincidunt. Praesent tincidunt congue egestas. Phasellus hendrerit eleifend ante, nec scelerisque lacus. Suspendisse tincidunt tincidunt posuere. Morbi id nulla a ex commodo pellentesque. Phasellus risus libero, volutpat vitae aliquet nec, malesuada quis est. Duis viverra, metus eu gravida maximus, ipsum nulla egestas elit, sit amet vulputate nunc arcu id ante. Donec cursus purus nec libero ullamcorper, facilisis tristique tortor mattis.",
      name: "The working of chocolate.",
      data: "2/3/2017",
    };
  },
});
