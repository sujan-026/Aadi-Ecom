import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import SpareParts from "@/components/SpareParts";
import {db} from "@/firebaseConfig";

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
