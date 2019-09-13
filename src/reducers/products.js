import ActionType from '../constants/ActionTypes';

/**
 * @param {object} initialState
 *
 **/

export default function(state = {}, action) {
  switch (action.type) {
    case ActionType.SET_PRODUCT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
