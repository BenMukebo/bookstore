import { createBook, deleteBook } from '../../components/Api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// import { v4 as uuidv4 } from 'uuid';

export const addBook = (payload) => async (dispatch) => {
  await createBook({
    itemId: payload.id,
    title: payload.title,
    category: payload.genre,
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          // id: uuidv4(),
          id: action.payload.id,
          title: action.payload.title,
          // author: action.payload.author,
          completed: 0,
          genre: action.payload.genre,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default: return state;
  }
};

export default reducer;
