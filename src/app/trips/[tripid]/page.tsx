import React from "react";
import { prisma } from "@/lib/prisma";
import ReactCountryFlag from "react-country-flag";
import { FaRegCheckCircle } from "react-icons/fa";


async function getDetails(tripid: string) {
    const tripsDetail = await prisma.trip.findUnique({
        where: {
            id: tripid,
        },
    }).finally(() => {
        prisma.$disconnect();
      });
    if(tripsDetail){
        return tripsDetail;
    }
}

export default async function TripDetails({ params }: { params: { tripid: string } }) {
    const tripDetails = await getDetails(params.tripid);
    return (
        <>
            <div className="text-gray-500">
                <img src={String(tripDetails?.coverImage)} alt="foto" className="mx-auto w-11/12" />
                <div className="leading-8 mx-auto w-11/12 my-2">
                    <h1 className="font-bold">{tripDetails?.name}</h1>
                    <div className="flex items-center my-0.3"><ReactCountryFlag countryCode={String(tripDetails?.countryCode)} svg /><p className="text-sm ml-2">{tripDetails?.location}</p>
                    </div>
                    <p className="text-sm leading-6"><span className="text-primary font-bold">R${Number(tripDetails?.pricePerDay)}</span> por dia</p>
                </div>
            </div>
            <div className="leading-7 mx-auto w-11/12 my-2">
                <div className="flex my-2">
                    <input className="p-2 rounded-lg w-2/4 mr-1 border-2 border-gray-300" placeholder="Data de inicio"></input>
                    <input className="p-2 rounded-lg w-2/4 ml-1 border-2 border-gray-300" placeholder="Data final"></input>
                </div>
                <input placeholder="Numero de hospedes (max: 5)" className="p-2 rounded-lg w-full border-2 border-gray-300 mt-1" ></input>
                <div className="flex font-bold w-full justify-between text-gray-500 my-2 mt-3">
                    <p>Total:</p>
                    <p>R$ </p>
                </div>
                <button className="w-full rounded-lg p-2 text-white bg-primary border-none mb-5">Reservar agora</button>
                <div className="bg-gray-400 w-full h-[2px] my-2"></div>
            </div>

            <div className="leading-7 mx-auto w-11/12 my-6 text-gray-500">
                <h2 className="font-bold mb-2">Sobre a viagem:</h2>
                <p className="text-xs">{tripDetails?.description}</p>
            </div>
            <div className="leading-7 mx-auto w-11/12 my-2 text-gray-500">
                <h2 className="font-bold mb-2">Destaques</h2>
                <div className="flex flex-wrap">
                {tripDetails?.highLights.map((item) => { 
                    return <div className="flex items-center w-2/4 my-1"><FaRegCheckCircle style={{ color: '#590BD8' }} size={12}/><p className="ml-3 text-xs" key={item}>{item}</p></div>
                    })}
                </div>
            </div>

            <div className="leading-7 mx-auto w-11/12 my-6 text-gray-500">
                <h2 className="font-bold">Localização</h2>
                <p className="text-sm ml-2">{tripDetails?.location}</p>
                <button className="w-full rounded-lg p-2 text-primary bg-white border-primary border-2 my-4">Ver no Google Maps</button>
            </div>
        </>
    )
};


