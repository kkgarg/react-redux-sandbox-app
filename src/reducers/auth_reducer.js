import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_USER } from '../actions/types.js';

export default function(state={}, action){
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: "" };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: ""};
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    case FETCH_USER:
      return {...state, message: `Welcome ${action.payload.user.email}`}
  }
  return state;
}
