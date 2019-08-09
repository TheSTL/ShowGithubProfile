import {
  SET_CURRENT_USER,
  SET_FOLLOWER,
  SET_FOLLOWING,
  SET_LOADING,
  SET_REPO,
  ADD_ERROR,
  REMOVE_ERROR,
  REMOVE_LOADING
} from '../utils/constants';

function rootReducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.data
      };
    case ADD_ERROR:
      return {
        ...state,
        err: action.err
      };
    case REMOVE_ERROR:
      return {
        ...state,
        err: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: false
      };
    case SET_FOLLOWER:
      return {
        ...state,
        followers: action.followers
      };
    case SET_FOLLOWING:
      return {
        ...state,
        following: action.following
      };
    case SET_REPO:
      return {
        ...state,
        repo: action.repo
      };
    default:
      return state;
  }
}

export default rootReducer;
