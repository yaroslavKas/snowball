import { connect } from 'react-redux'
import Component from './Component';
import { submitRegister, submitLogin } from './action'

const mapStateToProps = (state) => ({
  auth: state.auth,
  login: state.login
});

const mapDispatchToProps = (dispatch)=> ({
  registrationFunction: auth => {
    dispatch(submitRegister(auth))
  },
  loginFunction: login => {
    dispatch(submitLogin(login))
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Component)