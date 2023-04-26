import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import {doc, setDoc, getDoc, onSnapshot, collection} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCEoFGEfdxxllPD4CtTHbArJjF7UXhpyFY",
  authDomain: "disneyplus-clone-cfe06.firebaseapp.com",
  projectId: "disneyplus-clone-cfe06",
  storageBucket: "disneyplus-clone-cfe06.appspot.com",
  messagingSenderId: "857229572798",
  appId: "1:857229572798:web:7081b3a8a2db37f0127cef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, doc, setDoc, getDoc, onSnapshot,collection };
export default db;