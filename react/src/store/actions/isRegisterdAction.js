import * as actionType from '../action';

export const CheckRegistration = () => {
  return (dispatch) => {
    dispatch({
      type: actionType.ISREGISTERD,
    });
  };
};
