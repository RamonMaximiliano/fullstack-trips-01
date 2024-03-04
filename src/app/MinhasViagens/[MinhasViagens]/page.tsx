/*Server component*/
import React from "react";
import { prisma } from "@/lib/prisma";
import { User, TripReservation } from "@prisma/client";
import ReactCountryFlag from "react-country-flag";
import ReservarButtonDelete from "@/app/components/ReservationButtonDelete/ReservationButtonDelete";

async function getUsers() {
    const users = await prisma.user.findMany().finally(() => {
        prisma.$disconnect();
    });
    if (users) {
        return users;
    }
}

async function getReservation() {
    const trips = await prisma.tripReservation.findMany().finally(() => {
        prisma.$disconnect();
    });
    if (trips) {
        return trips;
    }
}

export default async function MinhasViagens({ params }: { params: { MinhasViagens: string } }) {
    const users: any = await getUsers();
    const trips: any = await getReservation();
    const userEnd = params.MinhasViagens.replace("%20", " ")
    const userID = users.find((item: User) => {
        return item.name == userEnd
    })
    const MyTrips = trips.filter((item: TripReservation) => {
        return item.userId == userID.id
    })
    return (
        
        <div className="container mx-auto p-2 lg:w-4/5 lg:mx-auto flex flex-col min-h-screen">
            <main className="flex-grow">
            <h1 className="font-bold my-4 lg:ml-60">Minhas viagens</h1>
            <div className="lg:flex lg:flex-wrap lg:gap-2 lg:w-4/6	lg:mx-auto justify-between">
                {MyTrips.length <= 0 && <h2>Você não tem nenhuma viagem reservada, ou aguarde o sistema ser atualizado.<br/> Volte em alguns minutos!</h2>}
            {
                MyTrips.map((item: TripReservation) =>
                    <div className="my-4 shadow-xl p-4 rounded-xl bg-gray-100 lg:w-[320px]" key={item.id}>
                        <div className="flex w-full items-center">
                            <img src={item.picture} alt="Hotel picture" className="w-[110px] h-[110px] object-cover rounded-lg"></img>
                            <div className="ml-4">
                                <h2 className="font-bold">{item.hotel}</h2>
                                <p className="text-sm">
                                    <ReactCountryFlag countryCode={String(item.country)} svg />
                                    <span className="ml-2">{item.location}</span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-500 w-full h-[1px] my-6"></div>
                        <div className=" flex flex-col justify-between h-[110px]">
                            <div>
                                <p>Data:</p>
                                <p className="text-sm">{item.start} - {item.end}</p>
                            </div>
                            <div>
                                <p>Hóspedes:</p>
                                <p className="text-sm">{item.guests} hóspedes</p>
                            </div>
                        </div>
                        <div className="bg-gray-500 w-full h-[1px] my-6"></div>
                        <div>
                            <h1 className="font-bold mb-4 items-center text-sm">Informações sobre o preço</h1>
                            <div className="flex justify-between">
                                <p className="text-sm">Total:</p>
                                <p className="font-bold text-sm">R$ {Number(item.totalPaid)}</p>
                            </div>
                            <ReservarButtonDelete   id={item.id}/>
                        </div>
                    </div>
                    )
            }
            </div>
            </main>
        </div>
    );
}




