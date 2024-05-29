// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-5ANJ32EVMfm8KtQMhia8FbsWFBXk40w",
  authDomain: "connect-with-your-designer.firebaseapp.com",
  projectId: "connect-with-your-designer",
  storageBucket: "connect-with-your-designer.appspot.com",
  messagingSenderId: "622769110746",
  appId: "1:622769110746:web:bb0b45f892ffb11b62efe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
