// DANGER !!!!!!!!!!!!!!
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs9rHHbIgBuQrCCzC9sR9X7fRcr85WAJ0",
  authDomain: "react-firebase-auth-b012f.firebaseapp.com",
  projectId: "react-firebase-auth-b012f",
  storageBucket: "react-firebase-auth-b012f.firebasestorage.app",
  messagingSenderId: "664424938649",
  appId: "1:664424938649:web:82c5a4a9d1248db6d6cc08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);