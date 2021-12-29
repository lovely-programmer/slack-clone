import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhY-lZMmfBZaRiUotPCJOFA1In8QlmkQI",
  authDomain: "slack-clone-6c1c5.firebaseapp.com",
  projectId: "slack-clone-6c1c5",
  storageBucket: "slack-clone-6c1c5.appspot.com",
  messagingSenderId: "607161470277",
  appId: "1:607161470277:web:ce49092fa70a22b239022c",
  measurementId: "G-FYT49EQD8S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
