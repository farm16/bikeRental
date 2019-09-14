import ActionType from '../constants/ActionTypes';

/**
 * @param [array] initialState
 *
 **/

export default function(
  state = [
    { total: { name: '' }, count: 0 },
    { total: { name: '' }, count: 0 },
    { total: { name: '' }, count: 0 },
    { total: { name: '' }, count: 0 },
    { total: { name: '' }, count: 0 },
    { total: { name: '' }, count: 0 }
  ],
  action
) {
  switch (action.type) {
    case ActionType.SET_CHECKOUT_USER:
      // console.log(action);
      switch (action.payload.item.id) {
        case 1:
          state[0] = action.payload;
          return [...state];
        case 2:
          state[1] = action.payload;
          return [...state];
        case 3:
          state[2] = action.payload;
          return [...state];
        case 4:
          state[3] = action.payload;
          return [...state];
        case 5:
          state[4] = action.payload;
          return [...state];
        case 6:
          state[5] = action.payload;
          return [...state];
        default:
          return state;
      }

    default:
      return state;
  }
}
