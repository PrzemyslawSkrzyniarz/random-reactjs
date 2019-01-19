import React, {Component} from 'react';

class Display extends Component {
  render() {
    return (
      <div>
        {this.props.value}
      </div>
    )
  }
}

export default Display;