import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAf0lVGI1UIY3ox0QxY8UviPuti7nwxNzU",
  authDomain: "unaguisushi-ef0db.firebaseapp.com",
  projectId: "unaguisushi-ef0db",
  storageBucket: "unaguisushi-ef0db.appspot.com",
  messagingSenderId: "672848211117",
  appId: "1:672848211117:web:f034e625b79197ae6d2a24"
};

export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);