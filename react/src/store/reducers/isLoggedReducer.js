import * as actionType from '../action';

const initalState = {
  logged: false,
};

const isLoggedReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionType.ISLOGGED:
      return {
        logged: !state.logged,
      };

    default:
      return state;
  }
};

export default isLoggedReducer;
