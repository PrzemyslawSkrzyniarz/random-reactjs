import React, {Component} from 'react';

class Button extends Component {

  generateNumber = () => {
    // console.log('generator');
      this.props.generator();

  }

  render() {
    return (
      <div>
        <button onClick={this.generateNumber}>Losuj liczbę</button>
      </div>
    )
  }
}

export default Button;