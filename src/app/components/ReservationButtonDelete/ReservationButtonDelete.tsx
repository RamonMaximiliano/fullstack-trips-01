"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineCancel } from "react-icons/md";
import { useSession } from "next-auth/react"


type reservedTrip = {
    id: string,
}
export default function ReservarButtonDelete(props: reservedTrip) {
    const { data: session, status } = useSession()
    const [success, setSuccess] = useState(false)
    const router = useRouter()
    console.log(status)


    async function deleteReservation() {
        if(status != 'authenticated'){
            window.alert("Por favor logar no sistema para gerenciar suas viagens!")
        } else {
        await fetch(`http://localhost:3000/apitripreser/${props.id}`, {
            method: "DELETE",
        })
        setSuccess(true);
        setTimeout(() => {
            router.refresh()
            setSuccess(false);
        }, 3000);
    }
    }
    return (
        <>
            {success &&
                <div className="h-[200px] w-[250px] bg-white fixed items-center text-center text-red-500 rounded-2xl border-red-500 border-4 font-bold lg:left-[43%]
                lg:right-[43%] mx-2 left-[10%] top-[5%] duration-200">
                    <MdOutlineCancel  size={45} className="w-[150px] mx-auto mt-6 mb-3" />
                    <h1 className="text-4xl">Cancelada!</h1>
                    <p className="mt-2">Sua viagem foi cancelada!</p>
                </div>}

            <button className="duration-200 w-full rounded-lg p-2 text-red-600 bg-white border-red-600 border-2 my-4 hover:bg-red-500 hover:text-white" onClick={deleteReservation}>Cancelar</button>
        </>
    )
}


/* 

Da um refresh na pagina cada vez que clica no botão
import { useRouter } from "next/navigation";
router.refresh()   

*/