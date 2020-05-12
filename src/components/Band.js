import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.delete(this.props.id)
  }

  render() {
    return(
      <div>
        <li key={this.props.id}>
          {this.props.name}
        </li>
        <button onClick={this.handleOnClick}>DELETE</button>
      </div>
    );
  }
};

export default Band;
