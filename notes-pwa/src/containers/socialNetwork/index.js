import React from 'react';
import {connect} from 'react-redux';
import Component from './Component';

const mapStateToProps = (state) => ({
  network: state.network
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component);