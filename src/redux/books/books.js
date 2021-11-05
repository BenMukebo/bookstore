// import { v4 as uuidv4 } from 'uuid';
import { postBook, deleteBook, displayBooks } from '../../components/Api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_ALL_BOOK = 'bookStore/books/SET_ALL_BOOK';

export const addBook = (payload) => async (dispatch) => {
  await postBook({
    itemId: payload.id,
    title: payload.title,
    category: payload.category,
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

export const setAllBook = () => async (dispatch) => {
  let books = await displayBooks();
  books = Object.entries(books).map((book) => ({
    id: book[0],
    category: book[1][0].category,
    title: book[1][0].title,
  }));
  dispatch({
    type: SET_ALL_BOOK,
    payload: books,
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          completed: 0,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case SET_ALL_BOOK:
      return action.payload;
    default: return state;
  }
};

export default reducer;
