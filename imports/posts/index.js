// @flow
// Import React and isomorphic-fetch.
import * as React from 'react'
import fetch from 'isomorphic-unfetch'

// Import Post element.
import Post from './post'

// Import Material UI's responsive grid system.
import { Grid } from 'material-ui'

// Our state should have this structure.
type State = {
  noOfLoadedPosts: number,
  posts: React.createElement
}

// Our Posts element.
export default class Posts extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      noOfLoadedPosts: 0,
      posts: []
    }
  }

  state: State

  componentDidMount () {
    this.componentDidMountHelper()
  }

  async componentDidMountHelper () {
    // Fetch metadata.
    const res = await fetch('http://localhost:3000/api')
    // Extract data from our request.
    let data
    if (res.ok) data = await res.json()
    else throw new (() => ({ message: 'Could not fetch post metadata.' }))()
    // For every post in the metadata array, generate a Post.
    const PostArray = []
    for (let i = 0; i < data.posts.length; i += 1) {
      /* eslint-disable no-await-in-loop */
      const postRes = await fetch('http://localhost:3000/api?post=lorem_ipsum')
      const postResData = await postRes.text()
      /* eslint-enable */
      const postMetadata = data.metadataOfPosts[data.posts[i]]
      PostArray.push((
        <Grid item xs><Post metadata={{
          name: postMetadata.name,
          date: postMetadata.date,
          markup: postResData
        }}
        /></Grid>
      ))
    }
    this.setState({ posts: PostArray })
  }

  props: {}

  render () {
    return (
      <Grid container spacing={16}>
        {this.state.posts}
      </Grid>
    )
  }
}
