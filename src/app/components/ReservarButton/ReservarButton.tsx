"use client"
import React, { useState } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";


type purchasedTrip = {
    id: string,
    price: number,
    startdate: string,
    enddate: string,
    guests: number,
    picture: string,
    hotel: string,
    country: string,
    location: string,
    users: any
}

export default function ReservarButton(props: purchasedTrip) {
    const router = useRouter();
    const [success, setSuccess] = useState(false)
    const { data: session, status } = useSession()
    const loggedID = props.users.find((user: any) => {
        return user.email == session?.user?.email
    })

    async function logReservation() {
        const response = await fetch("/apitripreser", {
            method: "POST",
            body: Buffer.from(
                JSON.stringify({
                    tripId: props.id,
                    start: props.startdate,
                    end: props.enddate,
                    userId: loggedID.id,
                    totalPaid: props.price,
                    guests: props.guests,
                    picture: props.picture,
                    hotel: props.hotel,
                    country: props.country,
                    location: props.location
                })
            ),
        });
        setSuccess(true);
                setTimeout(() => {
                router.push('/');
              }, 3000); 
    }
    return (
        <>
            {success &&
                <div className="h-[200px] w-[250px] bg-white fixed items-center text-center text-green-500 rounded-2xl border-green-500 border-4 font-bold lg:left-[43%]
                lg:right-[43%] mx-2 left-[10%] top-[5%] duration-200">
                    <FaCheckCircle size={45} className="w-[150px] mx-auto mt-6 mb-3" />
                    <h1 className="text-4xl">Sucesso!</h1>
                    <p className="mt-2">Sua viagem esta confirmada!</p>
                </div>}


            <button className="hover:bg-primary w-[100%] p-2 my-10 rounded-xl hover:text-white font-semibold mb-40 border-2 hover:border-2 bg-white text-primary duration-200 border-purple-600" onClick={logReservation}>Finalizar compra</button>

        </>
    )
}



/*
    const response = await fetch("http://localhost:3000/apitripreser", {
*/