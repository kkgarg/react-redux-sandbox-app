import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      ); 
    }
  }

  handleFormSubmit(formProps) {
    // Call action creator to signup the user
    this.props.signupUser(formProps);
  }


  render() {

    const { handleSubmit, fields: {email, password, passwordConfirmation}} = this.props;

    return(
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control" {...email} />
            {email.touched && email.error && <div className="error">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" {...password} />
            {password.touched && password.error && <div className="error">{password.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" {...passwordConfirmation} />
            {passwordConfirmation.touched && passwordConfirmation.error && <div className="error">{passwordConfirmation.error}</div>}
          </fieldset>
          {this.renderAlert()}
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
    );

  }
}


function validateForm(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = "Please enter an email";
  }

  if (!formProps.password) {
    errors.password = "Please enter an password";
  }

  if (!formProps.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter an passwordConfirmation";
  }

  if (formProps.password != formProps.passwordConfirmation) {
    errors.password = "Password must match";
  } 

  return errors;
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default reduxForm({
  form: "signup",
  fields: ["email", "password", "passwordConfirmation"],
  validate: validateForm
}, mapStateToProps, actions)(Signup);


