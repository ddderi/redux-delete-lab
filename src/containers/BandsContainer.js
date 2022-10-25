import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import Bands from '../components/Bands';

class BandsContainer extends Component {

 deleteBand = (id) => {
    this.props.removeBand(id)
  }

  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands} removeBand={this.deleteBand} />
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: name => dispatch({type: "ADD_BAND", name: name}),
    removeBand: id => dispatch({type: "DELETE_BAND", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
