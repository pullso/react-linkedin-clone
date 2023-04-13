// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm7eFZIJKibw-EFo8_tpkv8YKbgggBX-A",
  authDomain: "linkedin-clone-pullso.firebaseapp.com",
  projectId: "linkedin-clone-pullso",
  storageBucket: "linkedin-clone-pullso.appspot.com",
  messagingSenderId: "264853232751",
  appId: "1:264853232751:web:d245797f80f03ff39d419a",
  measurementId: "G-F0PPV3HHZ5"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app);
export {db, auth}
