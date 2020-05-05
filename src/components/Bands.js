import React, { Component } from 'react'
import Band from './Band'

export class Bands extends Component {
  constructor(props) {
    //console.log("props in Bands: ", props)
    super(props)
  }//constructor

  renderBands() {
    //console.log("bands in Bands.js: ", this.props.bands)
    //Map over bands prop and render a <Band /> for each one
    return this.props.bands.map(band => <Band band={band} deleteBand={this.props.deleteBand} />)
  }//renderBands

  render() {
    return (
      <div>
        <ul>{this.renderBands()}</ul>  
      </div>
    )
  }//render
}//class

export default Bands
