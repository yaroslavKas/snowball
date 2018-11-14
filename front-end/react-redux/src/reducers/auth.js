import constant from '../constants/AppConstants';

const initialState = {
  login: ""
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case constant.LOGIN.pending:
      return {...state, login: action.date };

    default:
      return state
  }
}

// /**
//  * Login
//  * */
// case actionTypes.LOGIN.pending:
// return update(
//   state, {
//     promise: {login: {$set: setPromiseState('pending')}}
//   }
// );
// case actionTypes.LOGIN.rejected: {
//   delLocalStorage('isAuthorised');
//
//   return update(state, {
//     error: {$set: actions.data || {}},
//     promise: {login: {$set: setPromiseState('rejected')}}
//   })
// }
// case actionTypes.LOGIN.success: {
//   setLocalStorage('isAuthorised', 'true');
//   return update(state, {
//     isShowLogin: {$set: false},
//     isShow: {$set: false},
//     isAuthorized: {$set: true},
//     user: {$set: actions.data || null},
//     error: {$set: {}},
//     promise: {login: {$set: setPromiseState('success')}}
//   })
// }