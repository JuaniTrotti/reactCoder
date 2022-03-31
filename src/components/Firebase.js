import { initializeApp } from "firebase/app";
import { getFirestore } from"firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSRRiDPst6vyhCU2XWuO462HbQQLoJ7TU",
  authDomain: "proyectofinalreactjs.firebaseapp.com",
  projectId: "proyectofinalreactjs",
  storageBucket: "proyectofinalreactjs.appspot.com",
  messagingSenderId: "590015544705",
  appId: "1:590015544705:web:c3c6c35ca0f8794b207c80"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);