// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaNrlBDyyTtPg_aW3X6OmAqUA5tEdvA1k",
  authDomain: "task-management-barik.firebaseapp.com",
  projectId: "task-management-barik",
  storageBucket: "task-management-barik.appspot.com",
  messagingSenderId: "436376424664",
  appId: "1:436376424664:web:e2061056a5b08d652b47ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;