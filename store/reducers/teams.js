import { FETCH_TEAMS, FETCH_TEAM, FETCH_UPCOMING_MATCHES } from '../types';

const initialState = {
  teams: [],
  team: {},
  loading: true,
  upcomingMatches: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAMS:
      return {
        ...state,
        teams: action.teams,
        loading: false,
      };
    case FETCH_TEAM:
      return {
        ...state,
        team: { ...state.team, [action.team.name]: action.team },
        loading: false,
      };
    case FETCH_UPCOMING_MATCHES:
      return {
        ...state,
        upcomingMatches: action.upcomingMatches,
        loading: false,
      };
    default:
      return state;
  }
};
