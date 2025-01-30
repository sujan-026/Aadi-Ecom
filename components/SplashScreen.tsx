// import React, { useEffect, useState } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import LottieView from "lottie-react-native";
// import { useRouter } from "expo-router";

// const SplashScreen = () => {
//   const [animationFinished, setAnimationFinished] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const loadResources = async () => {
//       try {
//         // Simulate loading resources
//         await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate 2 seconds load
//       } catch (error) {
//         console.error("Error loading resources:", error);
//       } finally {
//         setAnimationFinished(true);
//       }
//     };

//     loadResources();
//   }, []);

//   useEffect(() => {
//     if (animationFinished) {
//       router.replace("/"); // Navigate to the main app screen immediately
//     }
//   }, [animationFinished]);

//   return (
//     <View style={styles.container}>
//       <LottieView
//         source={require("@/assets/bike-animation.json")}
//         autoPlay
//         loop={false}
//         onAnimationFinish={() => setAnimationFinished(true)}
//         style={styles.animation}
//       />
//       <Text style={styles.text}>Welcome to Aadi Bikes</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   animation: {
//     width: 200,
//     height: 200,
//   },
//   text: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#007bff",
//   },
// });

// export default SplashScreen;





// import React, { useEffect, useRef } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import LottieView from "lottie-react-native";
// import { useNavigation } from "expo-router";

// const SplashScreen = () => {
//   const animation = useRef(null);
//   const navigation = useNavigation();

//   useEffect(() => {
//     animation.current?.play();

//     // Hide splash after animation completes
//     const timer = setTimeout(() => {
//       navigation.replace("index"); // Ensure proper transition
//     }, 250); // Adjust time as needed

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <LottieView
//         ref={animation}
//         source={require("@/assets/bike-animation.json")}
//         autoPlay
//         loop={false}
//         style={styles.animation}
//       />
//       <Text style={styles.text}>Welcome to Aadi Bikes</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   animation: {
//     width: 200,
//     height: 200,
//   },
//   text: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#007bff",
//   },
// });

// export default SplashScreen;






import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = ({ onFinish }) => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current?.play();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        source={require("@/assets/bike-animation.json")}
        autoPlay
        loop={false}
        speed={2.0}
        style={styles.animation}
        onAnimationFinish={() => {
          console.log("Splash Screen Finished!");
          if (onFinish) {
            onFinish(); 
          }
        }}
      />
      <Text style={styles.text}>Welcome to Aadi Bikes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  animation: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default SplashScreen;
