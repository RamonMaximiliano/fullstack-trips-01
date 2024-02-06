"use client"
import { Trip } from "@prisma/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
export type TripItemsProps = {
    trip: Trip;
}
type TripReservationForm = {
    guests: number;
    startdate: string;
    enddate: string;
}
export default function TripReservation(props: TripItemsProps & { startDate: string, endDate: string }): React.JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<TripReservationForm>();
    const [tripTotal, setTripTotal] = useState(0);
    const { trip, startDate, endDate } = props;
    const onSubmit = (data: any) => {
        console.log({ data });
    }
    return (
        <div className="leading-7 mx-auto w-11/12 my-2">
            <div className="flex my-2">
                <div className="w-2/4 mr-1">
                    <p className="text-sm text-gray-500">Data inicial:</p>
                    <input {...register("startdate", {
                            required: {
                                value: true,
                                message: "Data inicial obrigatória",
                            },
                        })}
                        className="p-2 rounded-lg border-2 border-gray-300" placeholder="YYYY-MM-DD" type="date" min={startDate} max={endDate}></input>
                    {errors.startdate && <p className="text-red-500 text-sm">{errors?.startdate?.message}</p>}
                </div>
                <div className="w-2/4 ml-1">
                    <p className="text-sm text-gray-500">Data final:</p>
                    <input {...register("enddate", {
                            required: {
                                value: true,
                                message: "Data final obrigatória!",
                            },
                        })}
                        className="p-2 rounded-lg border-2 border-gray-300" placeholder={endDate} type="date" min={startDate} max={endDate}></input>
                    {errors.enddate && <p className="text-red-500 text-sm">{errors?.enddate?.message}</p>}
                </div>
            </div>
            <input
                {...register("guests", {required: {
                        value: true,
                        message: "N° de hóspedes obrigatório!",
                    },
                })}
                placeholder={`Numero de hospedes (max:${trip.maxGuests || 'N/A'})`} className="p-2 rounded-lg w-full border-2 border-gray-300 mt-1" type="number" min="1" max="5" onChange={(e) => setTripTotal(Number(e.target.value))}></input>
            {errors.guests && <p className="text-red-500 text-sm">{errors?.guests?.message}</p>}
            <div className="flex font-bold w-full justify-between text-gray-500 my-2 mt-3">
                <p>Total:</p>
                <p>R$ {tripTotal * Number(trip.pricePerDay)}</p>
            </div>
            <button className="w-full rounded-lg p-2 text-white bg-primary border-none mb-5" onClick={() => handleSubmit(onSubmit)()}>Reservar agora</button>
            <div className="bg-gray-400 w-full h-[2px] my-2"></div>
        </div>
    )
}



/*

O input dele esta aparecendo o erro porque ele fez um input separado, verificar no react hook form como mostrar coisa similar



*/