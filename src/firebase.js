import firebase from "firebase/app";
import "firebase/auth";

export const auth  = firebase.initializeApp ({
    apiKey: "AIzaSyA9CN5N9jytJDgTRe3k4lghD6bPgYdZJlY",
    authDomain: "let-s-talk-24141.firebaseapp.com",
    projectId: "let-s-talk-24141",
    storageBucket: "let-s-talk-24141.appspot.com",
    messagingSenderId: "5921930411",
    appId: "1:5921930411:web:9d065a10328aa5553b0bee"
}).auth();
