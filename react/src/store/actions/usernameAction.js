import * as actionType from '../action';

export const saveUserName = (username) => {
  return (dispatch) => {
    dispatch({
      type: actionType.USERNAME,
      payload: username,
    });
  };
};
