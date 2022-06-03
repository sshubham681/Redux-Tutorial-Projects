import { INCREMENT, DECREMENT } from "../constants/index";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
