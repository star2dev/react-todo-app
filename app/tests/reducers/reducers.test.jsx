var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it ('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search string'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it ('should flip showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it ('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'A todo',
          completed: false,
          createdAt: 987441
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it ('should update todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        completedAt: 887,
        createdAt: 877
      }];
      var updates = {
        completed: false,
        completedAt: null
      };

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it ('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 884
      }];
      var action = {
        type: 'ADD_TODOS',
        todos
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
