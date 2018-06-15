const initialState = {
  stateDropDown: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOGGLE":
      return {...state, stateDropDown: !state.stateDropDown};
    case "SET_TOGGLE_FALSE":
      return {...state, stateDropDown: false};
    default:
      return state
  }
}