import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export class TodoApp extends React.Component {
  onLogout (e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="" className="button alert" onClick={this.onLogout.bind(this)}>
            <em className="fa fa-sign-out"></em> Logout
          </a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-11 medium-6 large-5 small-centered">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Redux.connect()(TodoApp);
