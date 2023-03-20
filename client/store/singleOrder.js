import axios from 'axios';

const CREATE_ORDER = 'CREATE_ORDER';

const _createOrder = (order) => {
  return {
    type: CREATE_ORDER,
    order,
  };
};

export const createOrder = (cartItems, totalCost) => {
  return async (dispatch) => {
    const { data: newOrder } = await axios.post('/api/orders', {
      cartItems,
      totalCost,
    });
    dispatch(_createOrder(newOrder));
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_ORDER:
      return action.order;
    default:
      return state;
  }
}
