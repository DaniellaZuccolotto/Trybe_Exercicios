import { ADD_PROFESSIONAL } from '../actions/action';

const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PROFESSIONAL:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default professionalReducer;
