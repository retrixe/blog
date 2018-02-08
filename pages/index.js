// @flow
/* eslint-disable react/no-unescaped-entities */
// Import React components.
import * as React from 'react'
import Head from 'next/head'
// Import Header.
import Header from '../imports/header'
// Import Post component.
import Posts from '../imports/posts'

const Index = () => {
  let muiTheme; // eslint-disable-line
  return (
    <div>
      <Header />
      <Posts />
    </div>
  )
}

export default Index
