import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDp4x3bBLPrB6RRVqVOHkNRmHeyxpldAMA",
    authDomain: "react-firebase-88d96.firebaseapp.com",
    databaseURL: "https://react-firebase-88d96-default-rtdb.firebaseio.com",
    projectId: "react-firebase-88d96",
    storageBucket: "react-firebase-88d96.appspot.com",
    messagingSenderId: "977894479626",
    appId: "1:977894479626:web:85a6e63a2d46a84731ccf3"
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const projectStorage = getStorage(app);
const auth = getAuth(app);

export { app, projectFirestore, projectStorage, auth };