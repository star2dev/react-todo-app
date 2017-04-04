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
        text: 'A new todo'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it ('should toggle todo', () => {
      var todos = [{
        id: 123,
        text: 'Something',
        completed: true,
        completedAt: 887,
        createdAt: 877
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});