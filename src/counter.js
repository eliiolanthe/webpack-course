import React from 'react'
import { hot } from 'react-hot-loader';

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return(
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.climb.bind(this)}>Click me</button>
      </div>
    )
  }
}

export default hot(module)(Counter);