import React, { Component } from 'react'

export default class Band extends Component {
  
  render() {
    return(
      <li key={this.props.band.id}>
        <span>{this.props.band.name} </span>
        <button
          onClick={() => this.props.deleteBand(this.props.band.id)}
        >DELETE</button>
      </li>
    )
  }
}