// import React, { useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   Animated,
// } from "react-native";

// const { width } = Dimensions.get("window");

// const Carousel = ({ data }) => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);

//   const renderItem = ({ item }) => (
//     <View style={styles.slide}>
//       <Image source={item.image} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   );

//   const onViewableItemsChanged = ({ viewableItems }) => {
//     if (viewableItems.length > 0 && flatListRef.current) {
//       const index = viewableItems[0].index;
//       flatListRef.current.scrollToIndex({ index });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         ref={flatListRef}
//       />
//       <View style={styles.indicatorContainer}>
//         {data.map((_, index) => {
//           const inputRange = [
//             (index - 1) * width,
//             index * width,
//             (index + 1) * width,
//           ];
//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.8, 1.4, 0.8],
//             extrapolate: "clamp",
//           });

//           return (
//             <Animated.View
//               key={index}
//               style={[styles.indicator, { transform: [{ scale }] }]}
//             />
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 5,
//   },
//   slide: {
//     width: width,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 5,
//   },
//   image: {
//     width: "100%",
//     height: 200,
//     borderRadius: 10,
//     resizeMode: "contain",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   description: {
//     fontSize: 14,
//     marginTop: 5,
//     textAlign: "center",
//   },
//   indicatorContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   indicator: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#333",
//     marginHorizontal: 5,
//   },
// });

// export default Carousel;




import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");

const Carousel = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0 && flatListRef.current) {
      const index = viewableItems[0].index;
      flatListRef.current.scrollToIndex({ index });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        ref={flatListRef}
        contentContainerStyle={styles.flatListContent}
      />
      <View style={styles.indicatorContainer}>
        {data.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[styles.indicator, { transform: [{ scale }] }]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  flatListContent: {
    alignItems: "center",
  },
  slide: {
    width: width - 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15, 
    borderRadius: 10, 
    overflow: "hidden", 
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10, 
    resizeMode: "contain", 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333",
    marginHorizontal: 5,
  },
});

export default Carousel;
