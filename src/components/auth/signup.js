import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  render() {

    const { handleSubmit, fields: {email, password, password_confirmation}} = this.props;

    return(
        <form action="">
          <fieldset className="form-group">
            <label>Email:</label>
            <input className="form-control" {...email} />
          </fieldset>
          <fieldset className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" {...password} />
          </fieldset>
          <fieldset className="form-group">
            <label>Confirm Password:</label>
            <input type="password" className="form-control" {...password_confirmation} />
          </fieldset>
          <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
    );

  }
}

export default reduxForm({
  form: "signup",
  fields: ["email", "password", "password_confirmation"]
})(Signup);


