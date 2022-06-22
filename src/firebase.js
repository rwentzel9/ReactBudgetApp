import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyCnRw0mLx64LJgE_nqx0yoXLo7G2mXbpB8",
  authDomain: "budget-app-caf46.firebaseapp.com",
  databaseURL: "https://budget-app-caf46.firebaseio.com",
  projectId: "budget-app-caf46",
  storageBucket: "budget-app-caf46.appspot.com",
  messagingSenderId: "646486656292",
  appId: "1:646486656292:web:a15a70581e4c934e54dfb1",
  measurementId: "G-1327LTP9VL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const functions = firebase.functions();

export const fb = firebase;

export const db = firebase.firestore();
