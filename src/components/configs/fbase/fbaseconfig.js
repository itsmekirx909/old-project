// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWXJdzwdBCFu7rIMnLO7KWq0GwpMcF8oU",
  authDomain: "test-2692c.firebaseapp.com",
  projectId: "test-2692c",
  storageBucket: "test-2692c.appspot.com",
  messagingSenderId: "258865106339",
  appId: "1:258865106339:web:0b0d478f76602643ce1e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app