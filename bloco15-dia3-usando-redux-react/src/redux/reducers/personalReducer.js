import { ADD_PERSONAL } from '../actions/action';

const INITIAL_STATE = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PERSONAL:
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default personalReducer;
