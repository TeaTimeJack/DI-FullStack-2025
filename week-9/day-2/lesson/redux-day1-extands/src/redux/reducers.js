const initialState = {
  count: 5,
};

export const counterReducer = (state = initialState, action) => {
  if (action.type === "incress") {
    return { ...state, count: state.count + 1 };
  } else if (action.type === "decress") {
    return { ...state, count: state.count - 1 };
  }

  return state;
};
