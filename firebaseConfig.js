import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase

// My database

// const firebaseConfig = {
//   apiKey: "AIzaSyD30MwWdAkLdlUeFRDy3bTeO_TwgnOm3mA",
//   authDomain: "aadi-spares.firebaseapp.com",
//   projectId: "aadi-spares",
//   storageBucket: "aadi-spares.firebasestorage.app",
//   messagingSenderId: "828452488626",
//   appId: "1:828452488626:web:3456dca7aeb0de43b650ab",
// };

// Aadi Spares database
const firebaseConfig = {
  apiKey: "AIzaSyAj7W-rQD0Rt-3Drj07wnUulWd1_IdGEak",
  authDomain: "spare-parts-832f5.firebaseapp.com",
  projectId: "spare-parts-832f5",
  storageBucket: "spare-parts-832f5.firebasestorage.app",
  messagingSenderId: "220144058616",
  appId: "1:220144058616:web:e04f2c18840e9c1c927b0d",
  measurementId: "G-JTR4D6R04C",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { db, auth };
