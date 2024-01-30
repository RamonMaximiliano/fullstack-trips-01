import React from "react";
import { prisma } from "@/lib/prisma";
import ReactCountryFlag from "react-country-flag";

async function getDetails(tripid: string) {
    const tripsDetail = await prisma.trip.findUnique({
        where: {
            id: tripid,
        },
    });
    return tripsDetail;
}

export default async function TripDetails({ params }: { params: { tripid: string } }) {
    const tripDetails = await getDetails(params.tripid);
    return (
        <>
            <div className="text-gray-500">
                <img src={String(tripDetails?.coverImage)} alt="foto" />
                <div className="leading-8 mx-auto w-11/12 my-2">
                    <h1 className="font-bold">{tripDetails?.name}</h1>
                    <div className="flex items-center my-0.3"><ReactCountryFlag countryCode={tripDetails?.countryCode} svg /><p className="text-sm ml-2">{tripDetails?.location}</p>
                    </div>
                    <p className="text-sm leading-6"><span className="text-primary font-bold">R${Number(tripDetails?.pricePerDay)}</span> por dia</p>
                </div>
            </div>
            <div className="leading-7 mx-auto w-11/12 my-2">
                <div className="flex ">
                    <input className="p-2 rounded-lg w-2/4 mr-1 border-2 border-gray-300" placeholder="Data de inicio"></input>
                    <input className="p-2 rounded-lg w-2/4 ml-1 border-2 border-gray-300" placeholder="Data final"></input>
                </div>
                <input placeholder="Numero de hospedes (max: 5)" className="p-2 rounded-lg w-full border-2 border-gray-300 mt-1" ></input>
                <div className="flex font-bold w-full justify-between text-gray-500">
                    <p>Total:</p>
                    <p>R$ </p>
                </div>
                <button className="w-full rounded-lg p-2 text-white bg-primary border-none mb-5">Reservar agora</button>
                <div className="bg-gray-400 w-full h-[2px] my-2"></div>
            </div>

            <div>
                <h2 className="font-bold">Sobre a viagem:</h2>
                <p>{tripDetails?.description}</p>
            </div>
            <div>
                <h2 className="font-bold">Destaques</h2>
                {tripDetails?.highLights.map((item) => { return <p key={item}>{item}</p> })}
            </div>
        </>
    )
};


