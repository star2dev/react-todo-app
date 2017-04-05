import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCX4yNXk7iZJy4ROtZMyXqz6b5ysT63Fqk",
    authDomain: "react-todo-app-136d7.firebaseapp.com",
    databaseURL: "https://react-todo-app-136d7.firebaseio.com",
    projectId: "react-todo-app-136d7",
    storageBucket: "react-todo-app-136d7.appspot.com",
    messagingSenderId: "69575097491"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
