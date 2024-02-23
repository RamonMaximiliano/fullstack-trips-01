"use client"
import React from "react";
import { useRouter } from "next/navigation";

type reservedTrip = {
    id: string,
}
export default function ReservarButtonDelete(props:reservedTrip) {
        const router = useRouter()
        async function deleteReservation(){
        await fetch(`http://localhost:3000/apitripreser/${props.id}`,{
            method:"DELETE",
       })
       router.refresh()   
    }
    return (
        <>
           <button className="duration-200 w-full rounded-lg p-2 text-red-600 bg-white border-red-600 border-2 my-4 hover:bg-red-500 hover:text-white" onClick={deleteReservation}>Cancelar</button>
        </>
    )
}


/* 

Da um refresh na pagina cada vez que clica no botão
import { useRouter } from "next/navigation";
router.refresh()   

*/