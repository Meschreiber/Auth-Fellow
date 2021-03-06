import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../redux/login'

/* -----------------    COMPONENT     ------------------ */

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>{message} with Google</span>
            </a>
          </p>
        </div>
      </div>
    );
  }

  onLoginSubmit(event) {
    // const { message } = this.props;
    event.preventDefault();
    this.props.loginUser(event.target.email.value, event.target.password.value)
    
  }
}

/* -----------------    CONTAINER     ------------------ */

// in redux/users, create an thunk creator to login a user
// in mapDispatch give props that thunk 
// in the submit function dispatch the thunk 


const mapState = () => ({ message: 'Log in' });
const mapDispatch = { loginUser };

export default connect(mapState, mapDispatch)(Login);
