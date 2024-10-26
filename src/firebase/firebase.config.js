// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {GoogleAuthProvider, getAuth} from  'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB7j8SjyYhjkkkX9caYpbxtAPTe8PTv0o",
  authDomain: "auth-email--github.firebaseapp.com",
  projectId: "auth-email--github",
  storageBucket: "auth-email--github.appspot.com",
  messagingSenderId: "978847216643",
  appId: "1:978847216643:web:13c308c179e643a2d7ca36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
