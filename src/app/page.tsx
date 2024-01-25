"use client"
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import TripSearch from './components/TripSearch/TripSearch'
import QuickSearch from './components/QuickSearch/QuickSearch'
import RecommendedTrips from './components/RecommendedTrips/RecommendedTrips'

export default function Home() {
  const { data } = useSession();
  return (
    <>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </>
  )
}

