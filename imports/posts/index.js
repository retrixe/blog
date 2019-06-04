// Import React and isomorphic-fetch.
import * as React from 'react'
import fetch from 'isomorphic-unfetch'

// Import Post element.
import Post from './post'

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
    const res = await fetch('/api')
    // Extract data from our request.
    let data
    if (res.ok) data = await res.json()
    else throw new (() => ({ message: 'Could not fetch post metadata.' }))()
    // For every post in the metadata array, generate a Post.
    const PostArray = []
    for (let post in data.metadataOfPosts) {
      const postRes = await fetch(`/api?post=${post}`)
      const postResData = await postRes.text()
      const postMetadata = data.metadataOfPosts[post]
      PostArray.push((
        <Post metadata={{
          name: postMetadata.name,
          date: postMetadata.date,
          markup: postResData
        }} key={post}
        />
      ))
    }
    this.setState({ posts: PostArray, noOfLoadedPosts: PostArray.length })
  }

  render () {
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {this.state.posts}
      </div>
    )
  }
}
