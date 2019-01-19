import React, {Component} from 'react';
import './Random.css'
import Display from '../Display/Display'
import Button from '../Button/Button'

class Random extends Component {
  constructor() {
    super();

    this.state = {
      randomNumber: 0
    }
  }

  generateRandomNumber = () => {
    const newNumber = Math.random();

    this.setState((prevState) => ({
        randomNumber: prevState.randomNumber + newNumber
    }));
  }

  componentDidMount() {
    this.generateRandomNumber();
  }


  render() {
    return (
      <div className="random-container">
        <Display value={this.state.randomNumber}/>
            <Button generator={this.generateRandomNumber}/>
      </div>
    )
  }
}

export default Random;