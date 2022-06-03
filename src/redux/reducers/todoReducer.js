import { ADD_TODO, DELETE_TODO } from "../constants";

const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    case DELETE_TODO:
      const filteredList = state.list.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        list: filteredList,
      };
    default:
      return state;
  }
};

export default todoReducer;
