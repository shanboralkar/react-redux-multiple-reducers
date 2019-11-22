const intialState = {
 b: 1
};

const reducer = (state = intialState, action) => {
 
 if (action.type === "ON_B_UP") {
    return {
      ...state,
      b: action.a + state.b
    };
  }

  return state;
};

export default reducer;
