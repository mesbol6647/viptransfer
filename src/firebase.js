
// // 

import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTNt-gQILWx0w_NNlQN7Naeop8orgjJwk",
    authDomain: "antalyavip-27868.firebaseapp.com",
    projectId: "antalyavip-27868",
    storageBucket: "antalyavip-27868.firebasestorage.app",
    messagingSenderId: "993838835943",
    appId: "1:993838835943:web:bb525975a10121846d5a42",
    measurementId: "G-QMZVPWDFXK"
  };


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
