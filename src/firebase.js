// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIGXiryS6AuDZMHaCZ9iMZBxGIBg5uPR4",
  authDomain: "taskguide-ciphersix.firebaseapp.com",
  projectId: "taskguide-ciphersix",
  storageBucket: "taskguide-ciphersix.appspot.com",
  messagingSenderId: "85371068233",
  appId: "1:85371068233:web:182887b28e3924929c4498"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);