import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <Band delete={this.props.delete}
      key={band.id} band={band} />)
  }

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
       {this.renderBands()} 
       {/* <Band bands={this.props.bands} /> */}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => {
  return {
    delete: band=> dispatch({type: 'DELETE_BAND', payload: band})
  }
  // addBand: name => dispatch({ type: "ADD_BAND", name }),
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
