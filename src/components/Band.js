import React, { Component } from 'react';

class Band extends Component {
  constructor(props) {
    super(props)
    //console.log("props in Band.js: ", this.props)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}</li>
        <button onClick={event => this.props.deleteBand(this.props.band.id)}>Delete Band</button>
      </div>
    );
  }
};

export default Band;
