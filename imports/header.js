// @flow
// Get React and Head to populate <head />
import React from 'react'
import Head from 'next/head'

// Import material-ui and all icons.
import { AppBar, Toolbar, Typography as Text, IconButton, Button } from 'material-ui'
import GitHubLogo from '../imports/github-logo'

// Write our page header.
const Header = () => {
  return (
    <div>
      <Head>
        <title>{`retrixe's blog`}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <AppBar position='fixed'>
        <Toolbar>
          <Text type='title' color='inherit'>{`retrixe's blog`}</Text>
          <div style={{flex: 1}} />
          <Button
            title='Fork me on GitHub'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/retrixe/blog'
            color='contrast'
          >Fork Me
          </Button>
          <a href='https://github.com/retrixe' title='My GitHub Page' target='_blank' rel='noopener noreferrer'>
            <IconButton color='contrast'><GitHubLogo /></IconButton>
          </a>
        </Toolbar>
      </AppBar>
      <br /> <br /> <br /> <br />
    </div>
  )
}

export default Header
