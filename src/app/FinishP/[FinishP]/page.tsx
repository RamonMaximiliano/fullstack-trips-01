/*Server component*/
import { prisma } from "@/lib/prisma";
import React from "react";
import ReservarButton from "@/app/components/ReservarButton/ReservarButton";

type purchasedTrip = {
  id: string,
  price: number,
  startdate: string,
  enddate: string,
  guests: number
}

/*a function que vai buscar a trip no banco através do ID*/
async function getTripData(tripId: string) {
  const tripData = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  }).finally(
    () => {
      prisma.$disconnect();
    });
  if (tripData) {
    return tripData;
  }
}

async function getUsers() {
  const users = await prisma.user.findMany().finally(() => {
      prisma.$disconnect();
  });
  if (users) {
      return users;
  }
}

export default async function FinishPurchase({ params }: { params: { FinishP: string } }) {
  const users: any = await getUsers();
  const purchaseitem = params.FinishP.split("p")
  const purchasedTrip: purchasedTrip = {
    id: String(purchaseitem[4]),
    price: Number(purchaseitem[0]),
    startdate: String(purchaseitem[1]),
    enddate: String(purchaseitem[2]),
    guests: Number(purchaseitem[3]),
  }
  const tripDataTaken = await getTripData(purchasedTrip.id);

  return (
    <>
      <div className="p-1 my-4 lg:w-[500px] lg:mx-auto lg:my-10">
        
        <div className="container mx-auto">
        <h2 className="font-bold text-lg">Sua viagem</h2>
          <div className="w-full shadow-xl rounded-lg p-3">
            <div className="flex  items-center">
              <img src={tripDataTaken?.imagesUrl} alt="Trip photo" className="h-[100px] w-[100px] object-cover rounded-lg" />
              <div className="ml-4">
                <p className="font-bold text-lg">{tripDataTaken?.name}</p>
                <p className="text-xs">{tripDataTaken?.countryCode} {tripDataTaken?.location}</p>
              </div>
            </div>
            <div className="bg-gray-400 h-[1px] my-5"></div>

            <p className="font-bold text-base ">Informações sobre o preço</p>
            <div className="flex justify-between ">
              <p className="text-base">Total:</p>
              <p className="font-bold">R$: {purchasedTrip.price}</p>
            </div>
          </div>

          <div className="my-5">
            <p className="font-bold">Data:</p>
            <p>De {purchasedTrip.startdate} até {purchasedTrip.enddate}</p>
          </div>
          <div className="my-5">
            <p className="font-bold">Hóspedes:</p>
            <p>{purchasedTrip.guests} hóspedes</p>
          </div>
        </div>
        <ReservarButton   id={purchasedTrip.id} price={purchasedTrip.price} startdate={purchasedTrip.startdate} enddate={purchasedTrip.enddate} guests={purchasedTrip.guests} 
        picture={String(tripDataTaken?.imagesUrl)} hotel={String(tripDataTaken?.name)} country={String(tripDataTaken?.countryCode)} location={String(tripDataTaken?.location)}
        users={users}
        />
      </div>
    </>
  )
}

