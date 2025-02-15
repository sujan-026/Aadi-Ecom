import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";
import { useRouter } from "expo-router";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastPage, setLastPage] = useState("/"); // Default to home page
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "User", currentUser.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.warn(" User data not found in Firestore. Logging out...");
            await signOut(auth);
            setUser(null);
            setUserData(null);
            router.replace("/login"); // Redirect to login page
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Save last visited page before login
  const saveLastPage = (page) => {
    setLastPage(page);
  };

  // Return last visited page
  const getLastPage = async () => {
    return lastPage;
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserData(null);
    router.replace("/login"); // Redirect to login
  };

  return (
    <AuthContext.Provider
      value={{ user, userData, loading, logout, saveLastPage, getLastPage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
