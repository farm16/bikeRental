import ActionType from '../constants/ActionTypes';

/**
 * @param {object} initialState
 *
 **/

export default function(
  state = { total: { bike: {}, accessory: {}, addon: {} } },
  action
) {
  switch (action.type) {
    case ActionType.SET_CHECKOUT_USER:
      console.log(action.payload.total.product_type);
      switch (action.payload.total.product_type) {
        case 'bike':
          return {
            ...state,
            total: {
              bike: action.payload,
              accessory: { ...state.total.accessory }
            }
          };
        case 'accessory':
          return {
            ...state,
            total: {
              bike: { ...state.total.bike },
              accessory: action.payload
            }
          };
        default:
          return { null: null };
      }

    default:
      return state;
  }
}
