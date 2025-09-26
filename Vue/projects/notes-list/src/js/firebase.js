// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn8yz-F6Bd9svYd8O_HZxPslVKjIZYIIk",
  authDomain: "noteslist-b43c8.firebaseapp.com",
  projectId: "noteslist-b43c8",
  storageBucket: "noteslist-b43c8.firebasestorage.app",
  messagingSenderId: "840111982507",
  appId: "1:840111982507:web:aeb362a4a8395b8ea734ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };