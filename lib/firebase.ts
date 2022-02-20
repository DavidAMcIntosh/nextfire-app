



  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqH9dz62H5yvec_YQ_EKg8EACDibYGl_4",
  authDomain: "nextfire-a6a0d.firebaseapp.com",
  projectId: "nextfire-a6a0d",
  storageBucket: "nextfire-a6a0d.appspot.com",
  messagingSenderId: "798740177709",
  appId: "1:798740177709:web:b2cf8fad6044ff6d5ea9a4",
  measurementId: "G-JK8Y1KSMES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);