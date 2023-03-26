import axios from 'axios';

const TOKEN = 'token';
const GET_PATTERNS = 'GET_PATTERNS';
const CREATE_PATTERN = 'CREATE_PATTERN';
const UPDATE_PATTERN = 'UPDATE_PATTERN';
const DELETE_PATTERN = 'DELETE_PATTERN';

const _getPatterns = (patterns) => ({
  type: GET_PATTERNS,
  patterns,
});

const _createPattern = (pattern) => ({
  type: CREATE_PATTERN,
  pattern,
});

const _updatePattern = (pattern) => ({
  type: UPDATE_PATTERN,
  pattern,
});

const _deletePattern = (pattern) => ({
  type: DELETE_PATTERN,
  pattern,
});

export const getPatterns = () => async (dispatch) => {
  const { data } = await axios.get('/api/patterns');
  dispatch(_getPatterns(data));
};

export const createPattern = (pattern) => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  const { data } = await axios.post('/api/patterns', pattern, {
    headers: {
      authorization: token,
    },
  });
  dispatch(_createPattern(data));
};

export const updatePattern = (pattern) => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  const { data } = await axios.put(`/api/patterns/${pattern.id}`, pattern, {
    headers: {
      authorization: token,
    },
  });
  dispatch(_updatePattern(data));
};

export const deletePattern = (id) => async (dispatch) => {
  const token = localStorage.getItem(TOKEN);
  const { data } = await axios.delete(`/api/patterns/${id}`, {
    headers: {
      authorization: token,
    },
  });
  dispatch(_deletePattern(data));
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_PATTERNS:
      return action.patterns;
    case CREATE_PATTERN:
      return [...state, action.pattern];
    case UPDATE_PATTERN:
      return state.map((pattern) => {
        return pattern.id === action.pattern.id ? action.pattern : pattern;
      });
    case DELETE_PATTERN:
      return state.filter((pattern) => pattern.id !== action.pattern.id);
    default:
      return state;
  }
}
