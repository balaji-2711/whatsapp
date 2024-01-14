import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5KTDIw28h2bP70Jp-mab4TC-LPhySe58",
  authDomain: "mern-whatsapp-1e776.firebaseapp.com",
  projectId: "mern-whatsapp-1e776",
  storageBucket: "mern-whatsapp-1e776.appspot.com",
  messagingSenderId: "523173104917",
  appId: "1:523173104917:web:b43adbae54adb4f7fd6d1c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };
