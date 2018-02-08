// @flow
// Import React and material-ui.
import * as React from 'react'
import { Paper, Typography, Button } from 'material-ui'
import { withStyles, createStyleSheet } from 'material-ui/styles'

// Type for our props and stylesheet.
type propType = {
  metadata: {
    name: string,
    markup: string,
    date: string,
  },
  classes: {
    root: string,
    button: string,
  },
}
type stateType = {
  showFullPost: boolean,
}
type themeType = {
  mixins: {
    gutters: Function
  }
}
/* eslint-enable no-undef */

// A bit of styling for our Post component.
const styleSheet = createStyleSheet('PaperSheet', (theme: themeType) => ({
  root: theme.mixins.gutters({
    paddingTop: 12,
    paddingBottom: 12
  }),
  button: {
    marginTop: 6,
    padding: '4px'
  }
}))

// Let's define our Post component.
class Post extends React.PureComponent<void, propType, stateType> {
  constructor (props: propType) {
    super(props)

    this.state = {
      showFullPost: false
    }
  }

  state: stateType

  render () {
    const minutesToRead = Math.round(this.props.metadata.markup.split(' ').length / 60)
    const date = `Written on ${this.props.metadata.date} | ${minutesToRead} minute read.`
    return (
      <Paper elevation={4} className={this.props.classes.root}>
        <Typography type='headline' component='h3' align='center'>{this.props.metadata.name}</Typography>
        <Typography type='subheading' component='h5' align='center'>{date}</Typography>
        <div style={{ height: 4 }} />
        <Typography
          type='body1'
          component='p'
          dangerouslySetInnerHTML={{
            __html: this.props.metadata.markup
          }}
        />
        <Button className={this.props.classes.button} color='accent'>Read more</Button>
      </Paper>
    )
  }
}

// Styled Post component.
export default withStyles(styleSheet)(Post)
