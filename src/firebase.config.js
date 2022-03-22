// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8m9eFg2bWs2pUNXb54K7mDC5xIrJPcjI",
  authDomain: "realestate-app-44823.firebaseapp.com",
  projectId: "realestate-app-44823",
  storageBucket: "realestate-app-44823.appspot.com",
  messagingSenderId: "892158429461",
  appId: "1:892158429461:web:5d2a60f14bb6ed9996c11c",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
