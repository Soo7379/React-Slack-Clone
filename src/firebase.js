import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDg3WkBepEqsIz2uKN2yU4rVhwmu8vTQJQ",
  authDomain: "react-slack-c686d.firebaseapp.com",
  databaseURL: "https://react-slack-c686d.firebaseio.com",
  projectId: "react-slack-c686d",
  storageBucket: "react-slack-c686d.appspot.com",
  messagingSenderId: "656029105399",
  appId: "1:656029105399:web:27ca3db87fe7aafbfb67f2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
