// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq5fmxvgPRzkvc2Uo0VGQ1wDqMeFwj_BM",
  authDomain: "child-care-expert.firebaseapp.com",
  projectId: "child-care-expert",
  storageBucket: "child-care-expert.appspot.com",
  messagingSenderId: "808331999118",
  appId: "1:808331999118:web:68e9bdbc0acc0c20e296df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;