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
                <div className="leading-6">
                    <h1 className="font-bold">{tripDetails?.name}</h1>
                    <div className="flex items-center my-0.3"><ReactCountryFlag countryCode={tripDetails?.countryCode} svg /><p className="text-sm ml-2">{tripDetails?.location}</p>
                    </div>
                    <p className="text-sm leading-6"><span className="text-primary font-bold">R${Number(tripDetails?.pricePerDay)}</span> por noite</p>
                </div>
            </div>
            <div>
                <input placeholder="Data de inicio"></input>
                <input placeholder="Data final"></input>
                <input placeholder="Numero de hospedes (max: 5)"></input>
                <div>
                    <p>Total:</p>
                    <p>R$ multip hosp * valor diaria</p>
                </div>
                <button>Reservar agora</button>
            </div>
            <div>----</div>
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


