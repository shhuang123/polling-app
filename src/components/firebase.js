import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBvaQ_VSykHV_4cFiz84-z7oJVpsKl_1yE",
    authDomain: "polls-6f51c.firebaseapp.com",
    databaseURL: "https://polls-6f51c.firebaseio.com",
    projectId: "polls-6f51c",
    storageBucket: "gs://polls-6f51c.appspot.com/",
  };

export const firebaseApp = firebase.initializeApp(firebase.config);
