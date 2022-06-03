import { DECREMENT, INCREMENT } from "../constants";

export const increment = (payload = 1) => {
  return {
    type: INCREMENT,
    payload,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
