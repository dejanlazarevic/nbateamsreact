import { GET_TEAMS, TEAMS_ERROR } from '../actions/types';

const initialState = {
  nbateams: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TEAMS:
      return {
        ...state,
        nbateams: payload,
        loading: false
      };
    case TEAMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
