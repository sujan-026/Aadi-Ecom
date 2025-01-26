import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

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

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Firestore, Auth, or other services
const db = getFirestore(app);

export default db;