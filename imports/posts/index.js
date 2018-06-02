// Import React and isomorphic-fetch.
import * as React from 'react'
import fetch from 'isomorphic-unfetch'

// Import Post element.
import Post from './post'

// Import Material UI's responsive grid system.
import { Grid } from '@material-ui/core'

// Our Posts element.
export default class Posts extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      noOfLoadedPosts: 0,
      posts: []
    }
  }

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
      const postRes = await fetch(`http://localhost:3000/api?post=${data.posts[i]}`)
      const postResData = await postRes.text()
      const postMetadata = data.metadataOfPosts[data.posts[i]]
      PostArray.push((
        <Grid item xl><Post metadata={{
          name: postMetadata.name,
          date: postMetadata.date,
          markup: postResData
        }}
        /></Grid>
      ))
    }
    this.setState({ posts: PostArray, noOfLoadedPosts: PostArray.length })
  }

  render () {
    return (
      <Grid container style={{ width: '100%' }}>
        {this.state.posts}
      </Grid>
    )
  }
}
