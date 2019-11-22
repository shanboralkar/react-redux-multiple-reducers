const intialState = {
  a: 1
};

const reducer = (state = intialState, action) => {
  if (action.type === "ON_A_UP") {
    return {
      ...state,
      a: state.a + action.b
    };
  } 

  return state;
};

export default reducer;
