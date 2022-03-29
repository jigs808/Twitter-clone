// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMFIm5BTGIh_T_vT3qbF89lHTeHLpjLaI",
  authDomain: "twitter-clone-25c4d.firebaseapp.com",
  projectId: "twitter-clone-25c4d",
  storageBucket: "twitter-clone-25c4d.appspot.com",
  messagingSenderId: "44553240380",
  appId: "1:44553240380:web:e0dbfa909d48b0cd5ce839",
  measurementId: "G-ZGG48QZVDC"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = firebaseApp.firestore();

export default db;