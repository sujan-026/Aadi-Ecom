import React, { useState, useEffect } from "react";
import {StyleSheet, ScrollView } from "react-native";
import Header from "@/components/Header";
import Carousel from "@/components/carousel";
import FeaturedCategories from "@/components/FeaturedCategories";
import BrandsSection from "@/components/BrandsSection";
import SplashScreen from "@/components/SplashScreen"; // Import SplashScreen component

const carouselData = [
  {
    image: require("@/assets/slide1.png"),
    title: "Welcome to Aadi Bikes",
    description: "Explore the best bike spares and accessories.",
  },
  {
    image: require("@/assets/slide2.png"),
    title: "Quality Parts Guaranteed",
    description: "Find genuine parts for your two-wheelers.",
  },
];

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Simulate loading delay for data-intensive components
    const loadComponents = async () => {
      try {
        // Preloading data for components in parallel
        await Promise.all([
          BrandsSection.preload ? BrandsSection.preload() : Promise.resolve(),
          FeaturedCategories.preload
            ? FeaturedCategories.preload()
            : Promise.resolve(),
        ]);
      } catch (error) {
        console.error("Error loading components:", error);
      } finally {
        setLoading(false);
      }
    };

    loadComponents();
  }, []);

  if (loading) {
    // Show splash screen during data loading
    return <SplashScreen onFinish={() => setLoading(true)} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Carousel data={carouselData} />
      {/* <Text style={styles.loadingTime}>
        Home loaded in {loadTime.toFixed(2)} seconds
      </Text> */}
      <BrandsSection />
      <FeaturedCategories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingTime: {
    marginVertical: 10,
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
