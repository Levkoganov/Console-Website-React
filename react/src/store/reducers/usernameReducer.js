import * as actionType from '../action';

const initalState = {
  saveUserName: '',
};

const UserNameReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionType.USERNAME:
      return {
        ...state,
        saveUserName: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default UserNameReducer;
