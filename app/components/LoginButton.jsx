var React = require('react');
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var LoginButton = React.createClass({
  propTypes: {
    btnClass: React.PropTypes.string.isRequired,
    faIcon: React.PropTypes.string.isRequired,
    authProvider: React.PropTypes.string.isRequired
  },
  onLogin() {
    var {dispatch, authProvider} = this.props;

    dispatch(actions.startLogin(authProvider));
  },
  render() {
    var {btnClass, faIcon, authProvider} = this.props;

    return (
      <div>
        <button className={"button expanded " + btnClass} onClick={this.onLogin}>
          <em className={"fa " + faIcon}></em> {authProvider}
        </button>
      </div>
    );
  }
});

export default Redux.connect()(LoginButton);
