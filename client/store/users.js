import axios from 'axios';

const GET_USERS = 'GET_USERS';

const _getUsers = (users) => {
  return {
    type: GET_USERS,
    users,
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const { data: users } = await axios.get('/api/users');
    dispatch(_getUsers(users));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}
