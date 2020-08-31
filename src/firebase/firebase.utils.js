import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBEx6Zz0GQ0MtX8zGmeja5cWFoB8ABQvAk",
  authDomain: "crwn-db-7a9ce.firebaseapp.com",
  databaseURL: "https://crwn-db-7a9ce.firebaseio.com",
  projectId: "crwn-db-7a9ce",
  storageBucket: "crwn-db-7a9ce.appspot.com",
  messagingSenderId: "811928152790",
  appId: "1:811928152790:web:b22996d4befba912583777",
  measurementId: "G-TK2XBZGFH6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
