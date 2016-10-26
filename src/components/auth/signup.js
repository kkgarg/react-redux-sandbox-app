import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {

    const { handleSubmit, fields: {email, password, passwordConfirmation}} = this.props;

    return(
        <form action="">
          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control" {...email} />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" {...password} />
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" {...passwordConfirmation} />
          </fieldset>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
    );

  }
}


function validateForm(formProps) {
  const errors = {};

  if (formProps.password != formProps.passwordConfirmation) {
    errors.password = "Password must match";
  } 

  return errors;
}


export default reduxForm({
  form: "signup",
  fields: ["email", "password", "passwordConfirmation"],
  validate: validateForm
})(Signup);


