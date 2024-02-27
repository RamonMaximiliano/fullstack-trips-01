"use client"
import React, { useState, useEffect } from "react";
import { FaHotel } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { Trip } from "@prisma/client";
import TripItem from "../TripItem/TripItem";

export default function QuickRecommended() {
    const [filter, setFilter] = useState(0)
    const [tripsData, setTripsData] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetch("http://localhost:3000/apicon").then((res) => res.json());
            setTripsData(data);
        };
        fetchData();
    }, []);

    let tripsFiltered: Array<Trip> = []
    if (filter == 1) {
        tripsFiltered = tripsData.filter((item: Trip) => {
            return item.hoteltype == 1
        })
    } else if (filter == 2) {
        tripsFiltered = tripsData.filter((item: Trip) => {
            return item.hoteltype == 2
        })
    } else if (filter == 3) {
        tripsFiltered = tripsData.filter((item: Trip) => {
            return item.hoteltype == 3
        })
    } else if (filter == 4) {
        tripsFiltered = tripsData.filter((item: Trip) => {
            return item.hoteltype == 4
        })
    } else if (filter == 0) {
        tripsFiltered = tripsData
    }

    /*   
    Todos = 0
    Resorts = 1
    Chalés = 2
    Pousadas = 3
    Fazendas = 4
    */

    return (
        <>
            {/*QUICK SEARCH*/}
            <div className="container p-2 mx-auto lg:w-3/4 lg:px-8">
                <div className="container flex justify-between items-center">
                    <div className="bg-gray-500 w-full h-[2px]"></div>
                    <h3 className="text-gray-500 whitespace-nowrap mx-2">Tente pesquisar por</h3>
                    <div className="bg-gray-500 w-full h-[2px]"></div>
                </div>
                <div className="container flex justify-between flex-wrap mx-1 my-4 text-gray-500">
                    <div className="items-center text-center flex flex-col hover:shadow-xl hover:bg-gray-100 rounded-full w-[100px] h-[60px] cursor-pointer pt-3 duration-200 hover:text-gray-800" onClick={() => { setFilter(0) }}>
                    <FaBookOpen />
                        <p className="text-sm">Todos</p>
                    </div>
                    <div className="items-center text-center flex flex-col hover:shadow-xl hover:bg-gray-100 rounded-full w-[100px] h-[60px] cursor-pointer pt-3 duration-200 hover:text-gray-800" onClick={() => { setFilter(1) }}>
                        <FaHotel />
                        <p className="text-sm">Resorts</p>
                    </div>
                    <div className="items-center text-center flex flex-col hover:shadow-xl hover:bg-gray-100 rounded-full w-[100px] h-[60px] cursor-pointer pt-3 duration-200 hover:text-gray-800" onClick={() => { setFilter(2) }}>
                        <FaHouseUser />
                        <p className="text-sm">Chalés</p>
                    </div>
                    <div className="items-center text-center flex flex-col hover:shadow-xl hover:bg-gray-100 rounded-full w-[100px] h-[60px] cursor-pointer pt-3 duration-200 hover:text-gray-800" onClick={() => { setFilter(3) }}>
                        <MdLocalHotel />
                        <p className="text-sm">Pousadas</p>
                    </div>
                    <div className="items-center text-center flex flex-col hover:shadow-xl hover:bg-gray-100 rounded-full w-[100px] h-[60px] cursor-pointer pt-3 duration-200 hover:text-gray-800" onClick={() => { setFilter(4) }}>
                        <FaWarehouse />
                        <p className="text-sm">Fazendas</p>
                    </div>
                </div>
            </div>
            {/*RECOMMENDED TRIPS*/}
            <div className="container flex justify-between items-center p-2 m-auto lg:w-3/4 lg:px-8">
                <div className="bg-gray-500 w-full h-[2px]"></div>
                <h3 className="text-gray-500 whitespace-nowrap mx-2">Destinos recomendados</h3>
                <div className="bg-gray-500 w-full h-[2px]"></div>
            </div>
            <div className="w-72 flex justify-between items-center flex-col my-5 m-auto lg:flex-row lg:w-3/4 lg:flex-wrap lg:px-2">
                {
                    tripsFiltered.map((item: Trip) => <TripItem key={item.id} trip={item} />)
                }
            </div>
        </>
    );
}
