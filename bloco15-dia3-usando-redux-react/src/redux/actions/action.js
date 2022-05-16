export const ADD_PERSONAL = 'ADD_PERSONAL';
export const ADD_PROFESSIONAL = 'ADD_PROFESSIONAL';

export function addPersonalAction(state) {
  return {
    type: ADD_PERSONAL,
    payload: state,
  };
}

export function addProfessionalAction(state) {
  return {
    type: ADD_PROFESSIONAL,
    payload: state,
  };
}
