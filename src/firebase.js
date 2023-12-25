import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaNg7s_zuZjz8USAdppHWvL6klqE4NfWQ",
  authDomain: "admin-70344.firebaseapp.com",
  projectId: "admin-70344",
  storageBucket: "admin-70344.appspot.com",
  messagingSenderId: "416553919798",
  appId: "1:416553919798:web:949af7c455f29000603f97",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();


