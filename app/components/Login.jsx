var React = require('react');
import * as Redux from 'react-redux';

import * as actions from 'actions';
import LoginButton from 'LoginButton';

export var Login = React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with an account below.
              </p>
              <LoginButton authProvider={'GitHub'} btnClass={'button-github'} faIcon={'fa-github'}/>
              <LoginButton authProvider={'Facebook'} btnClass={'button-facebook'} faIcon={'fa-facebook-official'}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
