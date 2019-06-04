// Import React and material-ui.
import * as React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography, Button, withStyles } from '@material-ui/core'

// Type for our props and stylesheet.

// A bit of styling for our Post component.
const styleSheet = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 12,
    paddingBottom: 12,
    marginLeft: 16,
    marginBottom: 24,
    marginRight: 16,
    flexGrow: 1
  }),
  button: {
    marginTop: 6,
    padding: '4px'
  }
})

// Let's define our Post component.
class Post extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showFullPost: false
    }
  }

  render () {
    const minutesToRead = Math.round(this.props.metadata.markup.split(' ').length / 60)
    const date = `Written on ${this.props.metadata.date} | ${minutesToRead} minute read.`
    const truncated = this.props.metadata.markup.split('\n')[0]
    return (
      <Paper elevation={4} className={this.props.classes.root}>
        <Typography variant='headline' component='h3' align='center'>{this.props.metadata.name}</Typography>
        <Typography variant='subheading' component='h5' align='center'>{date}</Typography>
        <div style={{ height: 4 }} />
        <Typography
          type='body1'
          component='p'
          dangerouslySetInnerHTML={{
            __html: !this.state.showFullPost ? truncated : this.props.metadata.markup
          }}
        />
        <Button
          className={this.props.classes.button}
          onClick={() => this.setState({ showFullPost: !this.state.showFullPost })}
        >{this.state.showFullPost ? 'Read less' : 'Read more'}</Button>
      </Paper>
    )
  }
}

Post.propTypes = {
  metadata: PropTypes.object,
  classes: PropTypes.object
}

// Styled Post component.
export default withStyles(styleSheet)(Post)
