import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from './types';

const ROOT_URL='http://kgdevel.in:3000';
const SIGNIN_URL=`${ROOT_URL}/api/signin`;
const SIGNUP_URL=`${ROOT_URL}/api/signup`;

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(SIGNIN_URL, {email, password})
      .then(response => {
          console.log(response);
          // If request is good
          // - Update state to indicate that user is authenticated
          dispatch({type: AUTH_USER});
          // - Save the JWT token
          localStorage.setItem('token',response.data.auth_token);
          // - redirect to /route '/feature'
          browserHistory.push('/feature');
       })
       .catch(()=>{
          // If request is bad
          // - Show an error to the user
          dispatch(authError('Bad login credentials'));
           
       });
    
  }
}

export function signupUser({email, password}){
  return function(dispatch){
    axios.post(SIGNUP_URL, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token',response.data.auth_token);
        browserHistory.push('/feature');
      })
      .catch(response => {
        console.log(response);
        dispatch(authError(response.data.error));
      });
    ;
  }
}


export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  };
}



export function signoutUser() {

 localStorage.removeItem('token');
  
  return {
    type: UNAUTH_USER
  };
}



