"use client"
import React from "react";
type purchasedTrip = {
    id: string,
    price: number,
    startdate: string,
    enddate: string,
    guests:number,
    picture:string,
    hotel:string,
    country:string,
    location:string
  }

export default function ReservarButton(props:purchasedTrip) {
    console.log(props)
    async function logReservation(){
        const response = await fetch("http://localhost:3000/apitripreser",{
            method:"POST",
            body: Buffer.from(
                JSON.stringify({
                    tripId: props.id,
                    start: props.startdate,
                    end: props.enddate,
                    userId: "clrb0oo360000lmto7tcj2cxo",
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
        <>
            <button className="bg-primary w-[100%] p-2 my-10 rounded-xl text-white font-semibold hover:bg-primaryHover mb-40" onClick={logReservation}>Finalizar compra</button>
        </>
    )
}
