import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // USE YOUR FIREBASE APP CREDENTAILS HERE
    apiKey: "AIzaSyDVbCX3Fxt8IKbyXO6Iu1NGi5IUnsKCHMY",
  authDomain: "chat1232-bc376.firebaseapp.com",
  projectId: "chat1232-bc376",
  storageBucket: "chat1232-bc376.appspot.com",
  messagingSenderId: "80364773394",
  appId: "1:80364773394:web:c04d2e2b57b35fc61978cb",
  measurementId: "G-LMHX3T1TYP"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
