// import { Text, View, StyleSheet, ScrollView } from "react-native";
// import SearchBarFilter from "@/components/SearchBarFilter";
// import spares from "@/assets/spares.json";
// import SpareParts from "@/components/SpareParts";
// import HorBikeCompanyList from "@/components/HorBikeCompanyList";

// export default function Index() {
//   return (
//     <View style={styles.container}>
      // <View style={styles.search}>
      //   <SearchBarFilter />
      // </View>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.horizontalScroll}
//       >
//         <HorBikeCompanyList />
//       </ScrollView>
//       <SpareParts spares={spares} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
  // search: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
//   text: {
//     color: "#fff",
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: "underline",
//     color: "#fff",
//   },
//   horizontalScroll: {
//     marginVertical: 10,
//     paddingHorizontal: 15,
//   },
// });



// import React from "react";
// import { Text, View, StyleSheet, ScrollView } from "react-native";
// import SearchBarFilter from "@/components/SearchBarFilter";
// import spares from "@/assets/spares.json";
// import SpareParts from "@/components/SpareParts";
// import HorBikeCompanyList from "@/components/HorBikeCompanyList";

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.search}>
//         <SearchBarFilter />
//       </View>
//       <ScrollView>
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.horizontalScroll}
//         >
//           <HorBikeCompanyList />
//         </ScrollView>
//         <SpareParts spares={spares} />
//         <View style={styles.tabSpacer} />
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   search: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   horizontalScroll: {
//     marginVertical: 10,
//     paddingHorizontal: 15,
//   },
//   tabSpacer: {
//     height: 80, // Adjust this based on the height of the bottom tab
//   },
// });





import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SearchBarFilter from "@/components/SearchBarFilter";
import spares from "@/assets/spares.json";
import HomeProductDisplay from "@/components/HomeProductDisplay";
import HorBikeCompanyList from "@/components/HorBikeCompanyList";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <SearchBarFilter />
      </View>
      <ScrollView>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          <HorBikeCompanyList />
        </ScrollView>
        <HomeProductDisplay spares={spares} />
        <View style={styles.tabSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  search: {
    alignItems: "center",
    justifyContent: "center",
  },
  horizontalScroll: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  tabSpacer: {
    height: 80, // Adjust based on bottom tab height
  },
});
