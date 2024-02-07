/*Server component*/
import { prisma } from "@/lib/prisma";
import React from "react";
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

export default async function FinishPurchase({ params }: { params: { FinishP: string } }) {
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
      <div className="p-1 my-4">
        <h2 className="font-bold text-lg">Sua viagem</h2>
        <div className="container mx-auto">
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
        <button className="bg-primary w-[100%] p-2 my-10 rounded-xl text-white font-semibold hover:bg-primaryHover mb-40">Finalizar compra</button>
      </div>
    </>
  )
}

