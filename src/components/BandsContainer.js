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
// const mapStateToProps = state => { 
//   return {
//     bands: state.band }
//   } 

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch({type: 'DELETE_BAND', id}) 
  })
  
  
  // addBand: name => dispatch({ type: "ADD_BAND", name }),


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
