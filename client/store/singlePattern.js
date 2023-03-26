import axios from 'axios';

const GET_SINGLE_PATTERN = 'GET_SINGLE_PATTERN';

const _getSinglePattern = (pattern) => ({
  type: GET_SINGLE_PATTERN,
  pattern,
});

export const getSinglePattern = (id) => async (dispatch) => {
  const { data: pattern } = await axios.get(`/api/patterns/${id}`);
  dispatch(_getSinglePattern(pattern));
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PATTERN:
      return action.pattern;
    default:
      return state;
  }
}
