// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9AU8-XvkkgElLi2FNOt7ZoMcR-e05pSI",
  authDomain: "smartlab-bea22.firebaseapp.com",
  projectId: "smartlab-bea22",
  storageBucket: "smartlab-bea22.appspot.com",
  messagingSenderId: "128723681056",
  appId: "1:128723681056:web:2494db7f684a860ddba145"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);