import charAPI from "../services/charAPI";

export const REQUEST_LOADING = 'REQUEST_LOADING';
export const GET_CHARACTER = 'GET_CHARACTER';
export const ERROR = 'ERROR';

const requestLoading = () => ({ type: REQUEST_LOADING });

const getCharacter = (resultAPI) => ({ type: GET_CHARACTER, resultAPI });

const getError = () => ({ type: ERROR });

export const fetchCharacter = (nameType) => {
  return async (dispatch) => {
    dispatch(requestLoading());
    try {
      const api = await charAPI(nameType);
      // console.log(api);
      dispatch(getCharacter(api))     
    } catch (error) {
      dispatch(getError());
    }
  }
}