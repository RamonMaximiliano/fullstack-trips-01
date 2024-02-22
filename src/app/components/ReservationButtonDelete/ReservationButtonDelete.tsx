"use client"
import React from "react";
type reservedTrip = {
    id: string,
}
export default function ReservarButtonDelete(props:reservedTrip) {
    async function deleteReservation(){
        await fetch(`http://localhost:3000/apitripreser/${props.id}`,{
            method:"DELETE",
       });
    }
    return (
        <>
           <button className="duration-200 w-full rounded-lg p-2 text-red-600 bg-white border-red-600 border-2 my-4 hover:bg-red-500 hover:text-white" onClick={deleteReservation}>Cancelar</button>
        </>
    )
}


/* 
https://github.com/felipemotarocha/fullstackweek-trips/blob/main/src/app/my-trips/components/UserReservationItem.tsx 

  const handleDeleteClick = async () => {
    const res = await fetch(`/api/trips/reservation/${reservation.id}`, {
      method: "DELETE",
    });


*/