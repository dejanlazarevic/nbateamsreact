import axios from 'axios';
import { GET_TEAMS, TEAMS_ERROR, GET_TEAM } from './types';

// Get all nba teams
export const getNbaTeams = () => async dispatch => {
  try {
    const res = await axios.get('https://www.balldontlie.io/api/v1/teams');

    dispatch({
      type: GET_TEAMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TEAMS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get nba team
export const getTeam = id => async dispatch => {
  try {
    const res = await axios.get(
      `https://www.balldontlie.io/api/v1/teams/${id}`
    );

    dispatch({
      type: GET_TEAM,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TEAMS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
