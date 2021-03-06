import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0ASauPW2oKZyQN9N2P7IN4_ukG4mTm2w",
  authDomain: "ecom-db-c8d7d.firebaseapp.com",
  databaseURL: "https://ecom-db-c8d7d.firebaseio.com",
  projectId: "ecom-db-c8d7d",
  storageBucket: "ecom-db-c8d7d.appspot.com",
  messagingSenderId: "563668944571",
  appId: "1:563668944571:web:ae06c603ede077147c8b9e",
  measurementId: "G-KH8ZJKZ2BT",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error happens ", err.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(object => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, object);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  return collections.docs.reduce((accumulator, doc) => {
    const { title, items } = doc.data();

    accumulator[title.toLowerCase()] = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };

    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
