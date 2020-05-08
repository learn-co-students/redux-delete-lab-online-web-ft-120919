import React, { Component } from 'react'
import Band from './Band'

class Bands extends Component {
    renderBands = () => {
        return this.props.bands.map((band, index) => {
            return <Band key={index} {...band} deleteBand={this.props.deleteBand}/>
        })
    }
    
    render() {
        return (
            <ul>
                {this.renderBands()}
            </ul>
        )
    }
}

export default Bands
