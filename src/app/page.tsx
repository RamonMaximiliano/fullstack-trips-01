import React from "react";
import TripSearch from './components/TripSearch/TripSearch'
import QuickRecommended from "./components/QuickRecommended/QuickRecommended";

export default function Home() {
  return (
    <>
      <TripSearch />
      <QuickRecommended />
    </>
  )
}

