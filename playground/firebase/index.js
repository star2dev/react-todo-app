import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCX4yNXk7iZJy4ROtZMyXqz6b5ysT63Fqk",
  authDomain: "react-todo-app-136d7.firebaseapp.com",
  databaseURL: "https://react-todo-app-136d7.firebaseio.com",
  projectId: "react-todo-app-136d7",
  storageBucket: "react-todo-app-136d7.appspot.com",
  messagingSenderId: "69575097491"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'TodoApp',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Bruce',
    age: 39
  }
});

firebaseRef.update({
  'app/version': '1.0.0.1',
  'user/age': 38
});
