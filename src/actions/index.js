import axios from 'axios';

const ROOT_URL='http://kgdevel.in:3000';
const SIGNIN_URL=`${ROOT_URL}/api/signin`;
const SIGNIN_URL1=`${ROOT_URL}/api/signin?email=kamalkgarg@gmail.com&password=kamal@123`;

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(SIGNIN_URL, {email, password})
      .then(response => {
        console.log(response);
       })

    // If request is good
    // - Update state to indicate that user is authenticated
    // - Save the JWT token
    // - redirect to /route '/feature'
    
    // If request is bad
    // - Show an error to the user
  }
}
