// Get React
import React from 'react'

// Import material-ui and all icons.
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import GitHubLogo from './github-logo'

// Write our page header.
const Header = () => {
  return (
    <div>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='title' color='inherit'>{`retrixe's blog`}</Typography>
          <div style={{flex: 1}} />
          <Button
            title='Fork me on GitHub'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/retrixe/blog'
            color='inherit'
          >Fork Me
          </Button>
          <a href='https://github.com/retrixe' title='My GitHub Page' target='_blank' rel='noopener noreferrer'>
            <IconButton color='default'><GitHubLogo /></IconButton>
          </a>
        </Toolbar>
      </AppBar>
      <br /> <br /> <br /> <br /> <br />
    </div>
  )
}

export default Header
