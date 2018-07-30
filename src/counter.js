import React from 'react'
import { hot } from 'react-hot-loader';
import styles from './main.css';
import styled from 'react-emotion';
import { css } from 'emotion';

const Fancy = styled('h2')`
  color: ${props => props.wild ? 'hotpink' : 'gold'};
`;

const red = '#f00';
const className = css`
  color: ${red};
  font-size: 3em;
`;

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
    const isWild = this.state.count % 2 === 0;
    return(
      <div className={styles.counter}>
        <h2 className={className}>Count: {this.state.count}</h2>
        <button onClick={this.climb.bind(this)}>Click me</button>
        <Fancy wild={isWild}>Fancy component</Fancy>
      </div>
    )
  }
}

export default hot(module)(Counter);