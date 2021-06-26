import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDzS5ELxs6MbeQlMhC1yt3hSq82yRECEkk",
  authDomain: "blog-react-redux-2ec49.firebaseapp.com",
  projectId: "blog-react-redux-2ec49",
  storageBucket: "blog-react-redux-2ec49.appspot.com",
  messagingSenderId: "759202191257",
  appId: "1:759202191257:web:acb718b94860a7dfe4a508",
  measurementId: "G-WL21LHGR2W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapShots: true });

export default firebase;
