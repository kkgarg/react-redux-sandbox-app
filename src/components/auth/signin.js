import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions/index';

class Signin extends Component {


  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          {this.props.errorMessage}
        </div>
      ); 
    }
  }


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
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}


export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);






