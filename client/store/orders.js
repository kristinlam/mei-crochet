import axios from 'axios';

const TOKEN = 'TOKEN';
const GET_ORDERS = 'GET_ORDERS';

const _getOrders = (orders) => ({
  type: GET_ORDERS,
  orders,
});

export const getOrders = () => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  const { data } = await axios.get('/api/orders', {
    headers: {
      authorization: token,
    },
  });
  dispatch(_getOrders(data));
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
