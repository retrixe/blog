// Import React components.
import React from 'react'
import withRoot from '../imports/withRoot'
// Import Header.
import Header from '../imports/components/header'
// Import Post component.
import Posts from '../imports/posts'

const Index = () => (
  <div>
    <Header />
    <Posts />
  </div>
)

export default withRoot(Index)
