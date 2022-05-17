import { REQUEST_LOADING, GET_CHARACTER, ERROR } from "../actions/actions";

const INITIAL_STATE = {
  loading: false,
  name: "",
  gender: "",
  aliases: "",
  books: "",
  error: null,
};

const reducerFetch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CHARACTER:
      return {
        ...state,
        loading: false,
        name: action.resultAPI[0].name,
        gender: action.resultAPI[0].gender,
        aliases: action.resultAPI[0].aliases,
        books: action.resultAPI[0].books,
        error: null,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: 'Api Falhou'
      }
    default:
      return state;
  }
};

export default reducerFetch;
