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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
