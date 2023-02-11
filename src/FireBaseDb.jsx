// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8EQSg3bI4pPACIGYAn-zFIlCDRueg7N4",
  authDomain: "aziz-crud.firebaseapp.com",
  projectId: "aziz-crud",
  storageBucket: "aziz-crud.appspot.com",
  messagingSenderId: "775955130905",
  appId: "1:775955130905:web:8ca71f303d4c43c7649888",
  measurementId: "G-19458FF16C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DataBase = getFirestore(app)
export default DataBase;
