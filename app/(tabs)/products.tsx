// import spares from "@/assets/spares.json";
// import SpareParts from "@/components/SpareParts";
// import db from "@/firebaseConfig";

// export default function ProductScreen() {
//   return <SpareParts spares={spares} />;
// }


// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import SpareParts from "@/components/SpareParts";
// import db from "@/firebaseConfig";

// export default function ProductScreen() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Subcategory"));
//         const docsData = querySnapshot.docs.map((doc) => ({
//           name: doc.data().name, // Category name
//           data: doc.data().data || [], // Spare parts array
//         }));
//         setData(docsData);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <SpareParts spares={data} />;
// }



// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import SpareParts from "@/components/SpareParts";
// import db from "@/firebaseConfig";

// export default function ProductScreen() {
//   const [data, setData] = useState([]); // Initialize as an array

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Subcategory")); // Fetch the collection
//         const docsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(), // Spread the document data
//         }));
//         setData(docsData);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <SpareParts spares={data} />;
// }



// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import db from "@/firebaseConfig";
// import SpareParts from "@/components/SpareParts";

// export default function ProductScreen() {
//   const [data, setData] = useState([]); // Initialize as an array

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "Subcategory")); // Fetch the collection
//         const docsData = querySnapshot.docs.map((doc) => ({
//           name: doc.data().name, // Spread the document data
//         }));
//         setData(docsData);
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <SpareParts spares={data} />;
// }




import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import SpareParts from "@/components/SpareParts";
import db from "@/firebaseConfig";

export default function ProductScreen() {
  const [subcategories, setSubcategories] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Subcategory"));
        const subcategoriesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSubcategories(subcategoriesData);

        // Set the first tab as active by default
        if (subcategoriesData.length > 0) {
          setActiveTab(subcategoriesData[0].name);
        }
      } catch (error) {
        console.error("Error fetching subcategories: ", error);
      }
    };

    fetchSubcategories();
  }, []);

  return (
    <SpareParts
      subcategories={subcategories}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    />
  );
}
