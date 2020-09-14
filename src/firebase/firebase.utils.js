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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;