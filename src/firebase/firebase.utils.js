import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCN9rtUY67WxQ96HjcYSzKrfmiiRpCC0JU",
    authDomain: "ganpati-handloom.firebaseapp.com",
    databaseURL: "https://ganpati-handloom.firebaseio.com",
    projectId: "ganpati-handloom",
    storageBucket: "ganpati-handloom.appspot.com",
    messagingSenderId: "1013775090023",
    appId: "1:1013775090023:web:fbcef7637518ddffd46fc2",
    measurementId: "G-WFCW839VP9"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;