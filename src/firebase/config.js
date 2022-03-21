// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCFo7YuOr9ItAWyfdj9SSeRYxLn3M9GuYk',
  authDomain: 'chat-app-a84ad.firebaseapp.com',
  projectId: 'chat-app-a84ad',
  storageBucket: 'chat-app-a84ad.appspot.com',
  messagingSenderId: '298657731992',
  appId: '1:298657731992:web:247c77ab301d57469387ed',
  measurementId: 'G-QS6KZNV21T',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}

export { auth, db };
export default firebase;
