// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANSzJci-CIq_xKuvt_0slC7601pVtpoVs",
  authDomain: "taskman-bfef5.firebaseapp.com",
  projectId: "taskman-bfef5",
  storageBucket: "taskman-bfef5.appspot.com",
  messagingSenderId: "577440674895",
  appId: "1:577440674895:web:5bcd7d52d6d72c91da263a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app