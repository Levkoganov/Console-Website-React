import * as actionType from '../action';

const initalState = {
  isRegisterd: false,
};

const isRegisterdReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionType.ISREGISTERD:
      return {
        isRegisterd: !state.isRegisterd,
      };
    default:
      return state;
  }
};

export default isRegisterdReducer;
