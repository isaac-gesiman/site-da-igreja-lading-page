// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSRO68VL6Hvp39cGB8DaREkhEgVNJd55A",
  authDomain: "igreja-batista-getsemani-1ddd7.firebaseapp.com",
  projectId: "igreja-batista-getsemani-1ddd7",
  storageBucket: "igreja-batista-getsemani-1ddd7.firebasestorage.app",
  messagingSenderId: "546842958104",
  appId: "1:546842958104:web:8aac3f7a231143a6a6666d",
  measurementId: "G-999G05XHBH"
};

// Initialize Firebase saSas
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);