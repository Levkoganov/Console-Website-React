import * as actionType from '../action';

const initalState = {
  inputValues: '',
};

const RegisterReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionType.REGISTER:
      return {
        ...state,
        inputValues: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default RegisterReducer;
