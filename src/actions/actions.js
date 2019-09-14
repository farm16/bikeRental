import ActionTypes from '../constants/ActionTypes';

export const getCheckout = data => dispatch => {
  dispatch({
    type: ActionTypes.SET_CHECKOUT_USER,
    payload: data
  });
};
export const getProduct = data => dispatch => {
  dispatch({
    type: ActionTypes.SET_PRODUCT,
    payload: data
  });
};
