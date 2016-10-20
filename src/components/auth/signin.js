import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index';

class Signin extends Component {

  handleFormSubmit({email, password}) {
    console.log(email+ ", "+password);
    console.log("before calling signinUser");
    this.props.signinUser({email, password});
    console.log("after calling signinUser");
  }

  render() {
    const {handleSubmit, fields: {email, password}} = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} className="form-control" type="password" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}


export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, actions)(Signin);


