// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();

// apiKey: "AIzaSyDtPL7slscQ-A5HIbsW9FifuyqIewxf-2M",
// authDomain: "website-gallery-48a33.firebaseapp.com",
// projectId: "website-gallery-48a33",
// storageBucket: "website-gallery-48a33.appspot.com",
// messagingSenderId: "451067698304",
// appId: "1:451067698304:web:372fdcf048c5b44db01a65",
