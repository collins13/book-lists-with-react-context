import { v1 as uuid1 } from "uuid";

export const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid1(),
        },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};
