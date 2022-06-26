//FIREBASE
import firebase from 'firebase/app';
//FIREBASE SERVICES
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAB9uVL0xW3BapgiPX7Kat-Xz3PrjaVkw4",
    authDomain: "mymoney-ba65a.firebaseapp.com",
    projectId: "mymoney-ba65a",
    storageBucket: "mymoney-ba65a.appspot.com",
    messagingSenderId: "951515432833",
    appId: "1:951515432833:web:18378a2db1f74f521b0a80"
};

//INIT FIREBASE
firebase.initializeApp(firebaseConfig);

//INIT FIREBASE SERVICES
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//EXPORT SERVICES
export { projectFirestore, projectAuth };