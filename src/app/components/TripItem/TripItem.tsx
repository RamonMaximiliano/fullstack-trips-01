"use client"
import { Trip } from "@prisma/client";
import React from "react";

export type TripItemsProps = {
    trip: Trip;
}

export default function TripItem(props:TripItemsProps ) {
  return (
    <>
    <div>test</div>

    </>
  )
}
