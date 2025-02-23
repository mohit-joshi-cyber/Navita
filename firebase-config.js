
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ✅ Firebase Configuration (Replace with Your Actual Config)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMs7Gyspl269Yqj1Ox14-K7-kPZP3YrQg",
    authDomain: "navita-b6534.firebaseapp.com",
    databaseURL: "https://navita-b6534-default-rtdb.firebaseio.com",
    projectId: "navita-b6534",
    storageBucket: "navita-b6534.firebasestorage.app",
    messagingSenderId: "447904462174",
    appId: "1:447904462174:web:5e989a0bbc7a8cc6c3cbcf",
    measurementId: "G-L2ZHLHD7V8"
  };

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // ✅ Ensure Firestore is initialized and exported
// ✅ Export Auth for Use in Other Files
export { auth, db };

