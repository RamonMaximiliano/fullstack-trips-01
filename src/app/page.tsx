import React from "react";
import TripSearch from './components/TripSearch/TripSearch'
import QuickSearch from './components/QuickSearch/QuickSearch'
import RecommendedTrips from './components/RecommendedTrips/RecommendedTrips'
import QuickRecommended from "./components/QuickRecommended/QuickRecommended";

export default function Home() {
  return (
    <>
      <TripSearch />
      <QuickRecommended />
    </>
  )
}

