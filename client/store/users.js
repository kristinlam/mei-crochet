import axios from 'axios';

const TOKEN = 'token';
const GET_USERS = 'GET_USERS';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

const _getUsers = (users) => ({
  type: GET_USERS,
  users,
});

const _updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

const _deleteUser = (user) => ({
  type: DELETE_USER,
  user,
});

export const getUsers = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  const { data } = await axios.get('/api/users', {
    headers: { authorization: token },
  });
  dispatch(_getUsers(data));
};

export const updateUser = (user) => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  const { data } = await axios.put(`/api/users/${user.id}`, user, {
    headers: {
      authorization: token,
    },
  });
  dispatch(_updateUser(data));
};

export const deleteUser = (id) => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  const { data } = await axios.delete(`/api/users/${id}`, {
    headers: {
      authorization: token,
    },
  });
  dispatch(_deleteUser(data));
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case UPDATE_USER:
      return state.map((user) => {
        return user.id === action.user.id ? action.user : user;
      });
    case DELETE_USER:
      return state.filter((user) => user.id !== action.user.id);
    default:
      return state;
  }
}
