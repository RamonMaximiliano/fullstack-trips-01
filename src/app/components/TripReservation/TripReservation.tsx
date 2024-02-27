"use client"
import { Trip } from "@prisma/client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { differenceInDays } from "date-fns";
import { useRouter  } from 'next/navigation'

/*o useRouter é similar ao useNavigate, para server component tem que ser o "redirect" */
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
    const [tripTotalGuests, setTripTotalGuests] = useState(0);
    const router = useRouter()
    const [inicFin, setInicFin] = useState(false);
    const [initialDate, setInitialDate] = useState(0);
    const [finalDate, setFinalDate] = useState(0);
    const [maxTotal, setMaxTotal] = useState(0);
    const { trip, startDate, endDate } = props;

    const onSubmit = (data: any) => {
        if (data.startdate > data.enddate) {
            setInicFin(true)
        } else {
            setInicFin(false)
        }
        const tripData:string = `${String(maxTotal)}p${String(data.startdate)}p${String(data.enddate)}p${String(data.guests)}p${String(props.trip.id)}`
        router.push(`/FinishP/${tripData}`)
    }
    const startDateString = initialDate;
    const startDateObject = new Date(startDateString);
    const endDateString = finalDate;
    const endDateObject = new Date(endDateString);
    const differenceDays = differenceInDays(endDateObject, startDateObject)
    const finalPrice = Number(trip.pricePerDay);
    
    useEffect(() => {
        const tripTotalEnd = (differenceDays * finalPrice) * tripTotalGuests;
        setMaxTotal(tripTotalEnd)
    }, [initialDate, finalDate, tripTotalGuests]);

    return (
        <div className="leading-7 mx-auto w-11/12 my-2">
            <div className="flex my-2">
                <div className="w-2/4 mr-1">
                    <p className="text-sm text-gray-500">Data inicial:</p>
                    <input
                        {...register("startdate", {
                            required: {
                                value: true,
                                message: "Data inicial obrigatória",
                            },
                            onChange: (e) => setInitialDate(e.target.value)
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
                        onChange: (e) => setFinalDate(e.target.value)
                    })}
                        className="p-2 rounded-lg border-2 border-gray-300" placeholder={endDate} type="date" min={startDate} max={endDate}></input>
                    {errors.enddate && <p className="text-red-500 text-sm">{errors?.enddate?.message}</p>}
                </div>
            </div>
            {inicFin && <p className="text-red-500 text-sm">Data final precisa ser maior que data inicial!</p>}
            <input
                {...register("guests", {
                    required: {
                        value: true,
                        message: "N° de hóspedes obrigatório!",
                    },
                })}
                placeholder={`Numero de hospedes (max:${trip.maxGuests || 'N/A'})`} className="p-2 rounded-lg w-full border-2 border-gray-300 mt-1" type="number" min="1" max="5" onChange={(e) => setTripTotalGuests(Number(e.target.value))}></input>
            {errors.guests && <p className="text-red-500 text-sm">{errors?.guests?.message}</p>}
            <div className="flex font-bold w-full justify-between text-gray-500 my-2 mt-3">
                <p>Total:</p>
                <p>R$ {maxTotal}</p>
            </div>
            <button className="w-full rounded-lg p-2 hover:text-white border-2 hover:border-2 hover:bg-primary mb-5 bg-white text-primary duration-200 border-purple-700" onClick={() => handleSubmit(onSubmit)()}>Reservar agora</button>
            <div className="bg-gray-400 w-full h-[2px] my-2"></div>
        </div>
    )
}

