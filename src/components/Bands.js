import React, { Component } from 'react';
import Band from '../components/Band.js'

export default class Bands extends Component {

  renderBands = () => {
    return (this.props.bands.map(band => {
      return <Band key={band.id} id={band.id} name={band.name} delete={this.props.deleteBand} />
    }))
  }

  render() {
    return (
      <ul>
        {this.renderBands()}
      </ul>
    )
  }
}
