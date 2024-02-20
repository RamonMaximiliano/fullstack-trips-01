"use client"
import React from "react";
type reservedTrip = {
    id: string,
}
export default function ReservarButtonDelete(props:reservedTrip) {
    console.log(props)
    async function deleteReservation(){
        const response = await fetch("http://localhost:3000/apitripreser/${props.id}",{
            method:"DELETE",
            body: Buffer.from(
                JSON.stringify({
                    id: props.id,
                })
            ),
       });
    }
    return (
        <>
           <button className="w-full rounded-lg p-2 text-red-600 bg-white border-red-600 border-2 my-4" onClick={deleteReservation}>Cancelar</button>
        </>
    )
}
