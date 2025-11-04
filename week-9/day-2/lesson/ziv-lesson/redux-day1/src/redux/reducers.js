export const ACTION_INCREMENT = "increment";
export const ACTION_DECREMENT = "decrement";
export const ACTION_ADD_INPUT = "addinput";

const initialState = {
  count: 5,
};

export const counterReducer = (state = initialState, action) => {
  //   if (action.type === ACTION_INCREMENT) {
  //     return { ...state, count: state.count + 1 };
  //   } else if (action.type === ACTION_DECREMENT) {
  //     return { ...state, count: state.count - 1 };
  //   } else if (action.type === ACTION_ADD_INPUT) {
  //     return { ...state, count: state.count + Number(action.payload) };
  //   }
  switch (action.type) {
    case ACTION_INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION_DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION_ADD_INPUT:
      return { ...state, count: state.count + Number(action.payload) };
    default:
      return state;
  }
};

