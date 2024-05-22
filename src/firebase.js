import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYRD4_iW3xPVtikx2yf9SLhUu0J6TEqC4",
  authDomain: "cervejaria-esquina.firebaseapp.com",
  projectId: "cervejaria-esquina",
  storageBucket: "cervejaria-esquina.appspot.com",
  messagingSenderId: "725417272425",
  appId: "1:725417272425:web:1319dd00ab12a9d192aef8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, storage };
