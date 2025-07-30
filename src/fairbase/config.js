import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_sQiJNH9619cpRC4jLGPAeDiOvSMC3aE",
  authDomain: "user-projects-79534.firebaseapp.com",
  projectId: "user-projects-79534",
  storageBucket: "user-projects-79534.firebasestorage.app",
  messagingSenderId: "832511830785",
  appId: "1:832511830785:web:0044f4a1f8cc2665be4900",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
