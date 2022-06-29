
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByh0JNTa6de6hurkYQCNZRuZ1DMY3KsyM",
  authDomain: "gallery-website-dbb3b.firebaseapp.com",
  projectId: "gallery-website-dbb3b",
  storageBucket: "gallery-website-dbb3b.appspot.com",
  messagingSenderId: "84535505978",
  appId: "1:84535505978:web:e6bf6ddf43ad7166f07103"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();