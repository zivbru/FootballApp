import { FETCH_TEAMS, FETCH_TEAM, FETCH_UPCOMING_MATCHES } from '../types';
import * as config from '../../config/prod.json';

export const fetchTeams = (areaId) => async (dispatch) => {
  try {
    areaId = 2021;
    const response = await fetch(
      `http://api.football-data.org/v2/competitions/${areaId}/standings`,
      {
        method: 'GET',
        headers: {
          'X-Auth-Token': config['API token'],
        },
      }
    );
    if (!response.ok) {
      let message = 'Could not fetch teams!';
      // throw new Error(message);
    }

    const resData = await response.json();
    const teams = resData.standings[0].table.map((obj) => obj.team).slice(0, 5);

    dispatch({
      type: FETCH_TEAMS,
      teams,
    });
  } catch (error) {
    console.log('error', error);
  }
};

export const fetchTeamById = (teamId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.football-data.org/v2/teams/${teamId}`,
      {
        method: 'GET',
        headers: {
          'X-Auth-Token': config['API token'],
        },
      }
    );
    if (!response.ok) {
      let message = 'Could not fetch teams!';
      // throw new Error(message);
    }

    const resData = await response.json();
    dispatch({
      type: FETCH_TEAM,
      team: resData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchTeamUpcomingMatches = (teamId) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.football-data.org/v2/teams/${teamId}/matches?status=SCHEDULED`,
      {
        method: 'GET',
        headers: {
          'X-Auth-Token': config['API token'],
        },
      }
    );
    if (!response.ok) {
      let message = 'Could not fetch teams!';
      // throw new Error(message);
    }
    const resData = await response.json();
    dispatch({
      type: FETCH_UPCOMING_MATCHES,
      upcomingMatches: resData.matches,
    });
  } catch (error) {
    // console.log('error', error);
  }
};
