import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM-H0fJghBSEv_Rza_9s63-syRogSWTmc",
  authDomain: "student-crud-2135a.firebaseapp.com",
  projectId: "student-crud-2135a",
  storageBucket: "student-crud-2135a.appspot.com",
  messagingSenderId: "120002196959",
  appId: "1:120002196959:web:b26b35ca4615973101806a"
};

const FireAuth = initializeApp(firebaseConfig);
export const auth = getAuth(FireAuth);
export const db = getFirestore(FireAuth);