import * as actionType from '../action';

export const getInput = (formInput) => {
  return (dispatch) => {
    dispatch({
      type: actionType.REGISTER,
      payload: formInput,
    });
  };
};
