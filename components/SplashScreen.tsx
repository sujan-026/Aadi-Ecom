// import React, { useEffect, useRef } from "react";
// import { View, StyleSheet, Text } from "react-native";
// import LottieView from "lottie-react-native";

// const SplashScreen = ({ onFinish }) => {
//   const animation = useRef(null);

//   useEffect(() => {
//     animation.current?.play();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <LottieView
//         ref={animation}
//         source={require("@/assets/bike-animation.json")}
//         autoPlay
//         loop={false}
//         speed={1.0}
//         style={styles.animation}
//         onAnimationFinish={() => {
//           console.log("Splash Screen Finished!");
//           if (onFinish) {
//             onFinish(); 
//           }
//         }}
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
//     width: 400,
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







import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = ({ onFinish }) => {
  const animation = useRef(null);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    animation.current?.play();
    // Ensure animation runs for at least 3.5 seconds
    const timeout = setTimeout(() => {
      setAnimationFinished(true);
    }, 3500); // Adjust timing if necessary

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (animationFinished) {
      onFinish(); // Transition only after animation is completely finished
    }
  }, [animationFinished]);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        source={require("@/assets/bike2.json")}
        autoPlay
        loop={false}
        speed={2.0}
        style={styles.animation}
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
    width: 400,
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
