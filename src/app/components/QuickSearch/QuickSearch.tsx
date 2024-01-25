"use client"
import React from "react";
import { FaHotel } from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";

const QuickSearch = () => {
    return (
        <>
        <div className="container p-2 mx-auto">
            <div className="container flex justify-between items-center">
                <div className="bg-gray-500 w-full h-[2px]"></div>
                <h3 className="text-gray-500 whitespace-nowrap mx-2">Tente pesquisar por</h3>
                <div className="bg-gray-500 w-full h-[2px]"></div>
            </div>
            <div className="container flex justify-between flex-wrap mx-1 my-5 text-gray-500">
                <div className="items-center text-center flex flex-col">
                    <FaHotel />
                    <p className="text-sm">Resorts</p>
                </div>
                <div className="items-center text-center flex flex-col" >
                    <FaHouseUser />
                    <p className="text-sm">Chalés</p>
                </div>
                <div className="items-center text-center flex flex-col">
                    <MdLocalHotel />
                    <p className="text-sm">Pousadas</p>
                </div>
                <div className="items-center text-center flex flex-col">
                    <FaWarehouse />
                    <p className="text-sm">Fazendas</p>
                </div>
            </div>
            </div>
        </>
    );
}

export default QuickSearch