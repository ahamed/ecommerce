import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD0ASauPW2oKZyQN9N2P7IN4_ukG4mTm2w",
    authDomain: "ecom-db-c8d7d.firebaseapp.com",
    databaseURL: "https://ecom-db-c8d7d.firebaseio.com",
    projectId: "ecom-db-c8d7d",
    storageBucket: "ecom-db-c8d7d.appspot.com",
    messagingSenderId: "563668944571",
    appId: "1:563668944571:web:ae06c603ede077147c8b9e",
    measurementId: "G-KH8ZJKZ2BT"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData ) => {
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
                ...additionalData
            });
        } catch (err) {
            console.log('Error happens ', err.message);
        }
    }

    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 