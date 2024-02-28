"use client"
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react"

type purchasedTrip = {
    id: string,
    price: number,
    startdate: string,
    enddate: string,
    guests:number,
    picture:string,
    hotel:string,
    country:string,
    location:string,
    users: any
  }

export default function ReservarButton(props:purchasedTrip) {
    const { data: session, status } = useSession()
    const loggedID = props.users.find((user:any)=>{
        return user.email == session?.user?.email
    })

    async function logReservation(){
        const response = await fetch("http://localhost:3000/apitripreser",{
            method:"POST",
            body: Buffer.from(
                JSON.stringify({
                    tripId: props.id,
                    start: props.startdate,
                    end: props.enddate,
                    userId: loggedID.id,
                    totalPaid: props.price,
                    guests:props.guests,
                    picture:props.picture,
                    hotel:props.hotel,
                    country:props.country,
                    location:props.location
                })
            ),
       });
    }
    return (
        <><Link href={`/`}>
            <button className="hover:bg-primary w-[100%] p-2 my-10 rounded-xl hover:text-white font-semibold mb-40 border-2 hover:border-2 bg-white text-primary duration-200 border-purple-600" onClick={logReservation}>Finalizar compra</button>
            </Link>
        </>
    )
}

