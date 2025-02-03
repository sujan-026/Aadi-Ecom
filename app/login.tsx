// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { useRouter } from "expo-router";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import { auth, db } from "@/firebaseConfig";
// import { useAuth } from "@/app/context/AuthContext";

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
//   const [authError, setAuthError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { user, getLastPage } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (user) {
//       getLastPage().then((page) => {
//         router.push("/index");
//       });
//     }
//   }, [user]);

//   const handleAuthentication = async () => {
//     setAuthError("");
//     setLoading(true);

//     try {
//       if (isSignUp) {
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         const newUser = userCredential.user;

//         // Save user details to Firestore
//         await setDoc(doc(db, "User", newUser.uid), {
//           firstName,
//           lastName,
//           email,
//           role: "user", // Default role is user
//           createdAt: new Date(),
//         });

//         console.log(" User registered and saved in Firestore!");
//       } else {
//         const userCredential = await signInWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         const existingUser = userCredential.user;

//         // Check if user exists in Firestore
//         const userDoc = await getDoc(doc(db, "User", existingUser.uid));

//         if (!userDoc.exists()) {
//           console.warn("User data not found in Firestore! Logging out...");
//           await signOut(auth);
//           setAuthError("User data not found. Please sign up again.");
//           setLoading(false);
//           return;
//         }
//         console.log(" Users logged in and exists in Firestore!");
//         router.push("/index ");
//       }

//       // Reset form fields
//       setEmail("");
//       setPassword("");
//       setFirstName("");
//       setLastName("");

//       // Redirect to home after login/signup
//       setTimeout(() => {
//         router.replace("/index");
//       }, 500);
//     } catch (error) {
//       console.error("Authentication error:", error.message);
//       setAuthError("Error logging in, please check your credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.authContainer}>
//         <Text style={styles.title}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
//         {authError ? <Text style={styles.errorText}>{authError}</Text> : null}

//         {isSignUp && (
//           <>
//             <TextInput
//               style={styles.input}
//               value={firstName}
//               onChangeText={setFirstName}
//               placeholder="First Name"
//             />
//             <TextInput
//               style={styles.input}
//               value={lastName}
//               onChangeText={setLastName}
//               placeholder="Last Name"
//             />
//           </>
//         )}

//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           placeholder="Email"
//           autoCapitalize="none"
//           keyboardType="email-address"
//         />
//         <TextInput
//           style={styles.input}
//           value={password}
//           onChangeText={setPassword}
//           placeholder="Password"
//           secureTextEntry
//         />
//         <Button
//           title={isSignUp ? "Sign Up" : "Sign In"}
//           onPress={handleAuthentication}
//           color="#3498db"
//         />

//         <Text style={styles.toggleText} onPress={() => setIsSignUp(!isSignUp)}>
//           {isSignUp
//             ? "Already have an account? Sign In"
//             : "Need an account? Sign Up"}
//         </Text>
//         <Text style={styles.toggleHome} onPress={() => router.replace("/index")}>
//           Home
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#f0f0f0",
//   },
//   authContainer: {
//     width: "80%",
//     maxWidth: 400,
//     backgroundColor: "#fff",
//     padding: 16,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   input: {
//     height: 40,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     marginBottom: 16,
//     padding: 8,
//     borderRadius: 4,
//   },
//   toggleText: {
//     color: "#3498db",
//     textAlign: "center",
//     marginTop: 10,
//   },
//   toggleHome: {
//     color: "black",
//     textAlign: "center",
//     marginTop: 10,
//   },
//   errorText: {
//     color: "red",
//     textAlign: "center",
//     marginBottom: 10,
//   },
// });

// export default LoginScreen;













import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useRouter } from "expo-router";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "@/firebaseConfig";
import { useAuth } from "@/app/context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const router = useRouter();

  // Redirect to home if user is logged in
  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user]);

  const handleAuthentication = async () => {
    setAuthError("");
    setLoading(true);

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const newUser = userCredential.user;

        // Save user details to Firestore
        await setDoc(doc(db, "User", newUser.uid), {
          firstName,
          lastName,
          email,
          role: "user",
          createdAt: new Date(),
        });

        console.log(" User registered and saved in Firestore!");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const existingUser = userCredential.user;

        // Check if user exists in Firestore
        const userDoc = await getDoc(doc(db, "User", existingUser.uid));

        if (!userDoc.exists()) {
          console.warn(" User data not found in Firestore! Logging out...");
          await signOut(auth);
          setAuthError("User data not found. Please sign up again.");
          setLoading(false);
          return;
        }

        console.log(" User logged in and exists in Firestore!");
      }

      // Reset form fields
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");

      // Redirect to Home Page
      setTimeout(() => {
        router.replace("/");
      }, 300);
    } catch (error) {
      console.error("Authentication error:", error.message);
      setAuthError("Error logging in, please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.authContainer}>
        <Text style={styles.title}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
        {authError ? <Text style={styles.errorText}>{authError}</Text> : null}

        {isSignUp && (
          <>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
          </>
        )}

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />

        {loading ? (
          <ActivityIndicator size="large" color="#3498db" />
        ) : (
          <Button
            title={isSignUp ? "Sign Up" : "Sign In"}
            onPress={handleAuthentication}
            color="#3498db"
          />
        )}

        <Text style={styles.toggleText} onPress={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Need an account? Sign Up"}
        </Text>
        <Text
          style={styles.toggleHome}
          onPress={() => router.replace("/")}
        >
          Home
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
  authContainer: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  toggleText: {
    color: "#3498db",
    textAlign: "center",
    marginTop: 10,
  },
  toggleHome: {
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default LoginScreen;
