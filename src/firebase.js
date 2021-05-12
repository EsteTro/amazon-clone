import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhaOhP8ep7DKNAQz0oVtHwa0IaB3ZDF3o",
  authDomain: "clone-f68a3.firebaseapp.com",
  projectId: "clone-f68a3",
  storageBucket: "clone-f68a3.appspot.com",
  messagingSenderId: "729767714006",
  appId: "1:729767714006:web:210f1d4c4c30ee69147d77",
  measurementId: "G-NCDVPMWEBK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
