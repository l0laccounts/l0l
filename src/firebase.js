import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

const config = {
    apiKey: "AIzaSyD9JkyEs5o36r66k2H3ujzjDKeoMgYgNxM",
    authDomain: "testtogether-28537.firebaseapp.com",
    databaseURL: "https://testtogether-28537.firebaseio.com",
    projectId: "testtogether-28537",
    storageBucket: "testtogether-28537.appspot.com",
    messagingSenderId: "545260820909",
    appId: "1:545260820909:web:767754b920611904e72924",
    measurementId: "G-SSLGTHJD9H"
}

firebase.initializeApp(config);

export const app = firebase.app();
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const functions = firebase.functions()