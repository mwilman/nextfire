import {initializeApp} from "@firebase/app";
import {getAnalytics} from "@firebase/analytics";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyBFUxI7ZgxOQDMlrJEaTqbjOX4hyh841eM",
    authDomain: "next-firebase-acebd.firebaseapp.com",
    projectId: "next-firebase-acebd",
    storageBucket: "next-firebase-acebd.appspot.com",
    messagingSenderId: "778203200589",
    appId: "1:778203200589:web:0f29fac6c4b89c6f14b004",
    measurementId: "G-H54QFR79PL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
