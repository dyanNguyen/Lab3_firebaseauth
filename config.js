// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCbV8GM4hJ49_GAiyNA0DVWzzch7RgzZk",
  authDomain: "lab3-7e72e.firebaseapp.com",
  projectId: "lab3-7e72e",
  storageBucket: "lab3-7e72e.appspot.com",
  messagingSenderId: "249854511754",
  appId: "1:249854511754:web:01ee321717714439123b73"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };