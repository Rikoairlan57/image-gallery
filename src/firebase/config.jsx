import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtPL7slscQ-A5HIbsW9FifuyqIewxf-2M",
  authDomain: "website-gallery-48a33.firebaseapp.com",
  projectId: "website-gallery-48a33",
  storageBucket: "website-gallery-48a33.appspot.com",
  messagingSenderId: "451067698304",
  appId: "1:451067698304:web:372fdcf048c5b44db01a65",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();
