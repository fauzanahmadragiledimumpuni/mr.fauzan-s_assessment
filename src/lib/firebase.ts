import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPBi8AhwCoPR6tDpfzg-ulqaVbcjFx4O4",
  authDomain: "mrrain-ffeac.firebaseapp.com",
  databaseURL: "https://mrrain-ffeac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mrrain-ffeac",
  storageBucket: "mrrain-ffeac.firebasestorage.app",
  messagingSenderId: "71526693517",
  appId: "1:71526693517:web:938ef0742fd00864bb00c4",
  measurementId: "G-D55HTQC6D6"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
