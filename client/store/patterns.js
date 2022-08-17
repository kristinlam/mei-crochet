import axios from 'axios';

const GET_PATTERNS = 'GET_PATTERNS';
const CREATE_PATTERN = 'CREATE_PATTERN';
const DELETE_PATTERN = 'DELETE_PATTERN';

const _getPatterns = (patterns) => {
  return {
    type: GET_PATTERNS,
    patterns,
  };
};

const _createPattern = (pattern) => {
  return {
    type: CREATE_PATTERN,
    pattern,
  };
};

const _deletePattern = (pattern) => {
  return {
    type: DELETE_PATTERN,
    pattern,
  };
};

export const getPatterns = () => {
  return async (dispatch) => {
    const { data: patterns } = await axios.get('/api/patterns');
    dispatch(_getPatterns(patterns));
  };
};

export const createPattern = (pattern) => {
  return async (dispatch) => {
    const { data: newPattern } = await axios.post('/api/patterns', pattern);
    dispatch(_createPattern(newPattern));
  };
};

export const deletePattern = (id) => {
  return async (dispatch) => {
    const { data: pattern } = await axios.delete(`/api/patterns/${id}`);
    dispatch(_deletePattern(pattern));
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_PATTERNS:
      return action.patterns;
    case CREATE_PATTERN:
      return [...state, action.pattern];
    case DELETE_PATTERN:
      return state.filter((pattern) => pattern.id !== action.pattern.id);
    default:
      return state;
  }
}
