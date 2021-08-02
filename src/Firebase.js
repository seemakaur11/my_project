// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBLs1Dxv88ukhYSE0Z3uVCWBti9bq7xVbg",
  authDomain: "mobile-app-9d59f.firebaseapp.com",
  projectId: "mobile-app-9d59f",
  storageBucket: "mobile-app-9d59f.appspot.com",
  messagingSenderId: "1041880203629",
  appId: "1:1041880203629:web:a25359a1e221a73c465a64",
  measurementId: "G-PP035P60L1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const firestore = firebase.firestore();
export const auth = firebase.auth();
//  export default fire;
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get a reference to the place in the database where the user is stored
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { username, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        username,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return getUserDocumentRef(userAuth.uid);
};

export const getUserDocumentRef = async uid => {
  if (!uid) return null;

  try {
    return firestore.doc(`users/${uid}`);
  } catch (error) {
    console.error('error fetching user', error.message);
  }
};

export default firebase;
