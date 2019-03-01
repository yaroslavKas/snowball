import { connect } from 'react-redux'
import Component from './Component';
import { submitRegister } from './action'

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch)=> ({
  registrationFunction: auth => {
    dispatch(submitRegister(auth))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Component)