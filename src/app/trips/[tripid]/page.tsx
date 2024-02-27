/*Server component*/
import React from "react";
import { prisma } from "@/lib/prisma";
import ReactCountryFlag from "react-country-flag";
import { FaRegCheckCircle } from "react-icons/fa";
import TripReservation from "@/app/components/TripReservation/TripReservation";

/*A getDetailsesta fazendo uma consulta no banco de dados sobre este item do ID*/
async function getDetails(tripid: string) {
    const tripsDetail = await prisma.trip.findUnique({
        where: {
            id: tripid,
        },
    })
    if (tripsDetail) {
        return tripsDetail;
    }
}

/* 
Este componente em função de como sua pasta foi criado e dos params da function do Component, o que for passado na URL vira os params,
é possivel visualuzar isso adicionando esta tag abaixo no component: <p>{params.tripid}</p>, ela vai retornar o que estiver na URL depois do /trips/
Não é possivel dar um console.log para visualizar este id pois este é um server component
*/

export default async function TripDetails({ params }: { params: { tripid: string } }) {

    /*O ID da trip foi passado para a getDetails puxando da URL para que ela possa fazer a consulta da devida trip no banco*/
    const tripDetails = await getDetails(params.tripid);
    const startdate = new Date(String(tripDetails?.startDate));
    const enddate = new Date(String(tripDetails?.endDate));
    let exactStartMonth: string = " "
    let exactStartDate: string = " "
    let exactEndDate: string = " "
    let exactEndMonth: string = " "

    // Check if tripDetails is undefined
    if (!tripDetails) {
        // Handle the case where tripDetails is undefined
        return <div>No trip details found.</div>;
    }

    /*START DATE*/
    if (startdate.getMonth() + 1 < 10) {
        exactStartMonth = `0${startdate.getMonth() + 1}`
    } else {
        exactStartMonth = `${startdate.getMonth() + 1}`
    }
    if (startdate.getDate() + 1 < 10) {
        exactStartDate = `0${startdate.getDate() + 1}`
    } else {
        exactStartMonth = `${startdate.getDate() + 1}`
    }
    /*START DATE*/

    /*END DATE*/
    if (enddate.getMonth() + 1 < 10) {
        exactEndMonth = `0${enddate.getMonth() + 1}`
    } else {
        exactEndMonth = `${enddate.getMonth() + 1}`
    }
    if (enddate.getDate() + 1 < 10) {
        exactEndDate = `0${enddate.getDate() + 1}`
    } else {
        exactEndDate = `${enddate.getDate() + 1}`
    }
    /*END DATE*/

    const entirestartdate = `${startdate.getFullYear()}-${exactStartMonth}-${exactStartMonth}`
    const entireenddate = `${enddate.getFullYear()}-${exactEndMonth}-${exactEndDate}`

    return (
        <div className="lg:w-3/4 lg:px-8 mx-auto">
            <div className="text-gray-500">
                <img src={String(tripDetails?.coverImage)} alt="foto" className="mx-auto w-11/12 lg:hidden" />

                <div className="hidden lg:grid grid-cols-[2fr,1fr,1fr] gap-2 grid-rows-2 lg:order-2 w-11/12 mx-auto">
                    <div className="relative row-span-2 shadow-2xl">
                        <img src={String(tripDetails?.coverImage)} alt="foto" className="object-cover h-full rounded-tl-lg rounded-bl-lg shadow-xl" />
                    </div>
                    <div className="relative w-full shadow-2xl">
                        <img src={String(tripDetails?.imagesUrl[1])} alt="foto" className="object-cover h-full shadow-2xl" />
                    </div>
                    <div className="relative w-full shadow-2xl">
                        <img src={String(tripDetails?.imagesUrl[2])} alt="foto" className="object-cover h-full rounded-tr-lg shadow-2xl" />
                    </div>
                    <div className="relative w-full shadow-2xl">
                        <img src={String(tripDetails?.imagesUrl[0])} alt="foto" className="object-cover h-full shadow-2xl" />
                    </div>
                    <div className="relative w-full shadow-2xl">
                        <img src={String(tripDetails?.coverImage)} alt="foto" className="object-cover h-full rounded-br-lg shadow-2xl" />
                    </div>
                </div>
                <div className="leading-8 mx-auto w-11/12 my-2">
                    <h1 className="font-bold">{tripDetails?.name}</h1>
                    <div className="flex items-center my-0.3"><ReactCountryFlag countryCode={String(tripDetails?.countryCode)} svg /><p className="text-sm ml-2">{tripDetails?.location}</p>
                    </div>
                    <p className="text-sm leading-6"><span className="text-primary font-bold">R${Number(tripDetails?.pricePerDay)}</span> por dia</p>
                </div>
            </div>
            <TripReservation trip={tripDetails} startDate={entirestartdate} endDate={entireenddate} />
            <div className="leading-7 mx-auto w-11/12 my-6 text-gray-500">
                <h2 className="font-bold mb-2">Sobre a viagem:</h2>
                <p className="text-xs">{tripDetails?.description}</p>
            </div>
            <div className="leading-7 mx-auto w-11/12 my-2 text-gray-500">
                <h2 className="font-bold mb-2">Destaques</h2>
                <div className="flex flex-wrap">
                    {tripDetails?.highLights.map((item) => {
                        return <div className="flex items-center w-2/4 my-1"><FaRegCheckCircle style={{ color: '#590BD8' }} size={12} /><p className="ml-3 text-xs" key={item}>{item}</p></div>
                    })}
                </div>
            </div>
            <div className="leading-7 mx-auto w-11/12 my-6 text-gray-500">
                <h2 className="font-bold">Localização</h2>
                <p className="text-sm ml-2">{tripDetails?.location}</p>
            </div>
        </div>
    )
};


