import * as actionType from '../action';

export const CheckLoggin = () => {
  return (dispatch) => {
    dispatch({
      type: actionType.ISLOGGED,
    });
  };
};
