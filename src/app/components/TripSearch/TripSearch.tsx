"use client"
import React from "react";

const TripSearch = () => {
    return (
        <>
            <div className="bg-gray-400">
                <div className="container mx-auto p-5 items-center justify-between flex flex-col">
                    <h1 className="font-bold text-lg">Encontre sua próxima <span className="text-primary">viagem!</span></h1>
                    <input placeholder="Onde você quer ir?" className="p-2 w-[100%] my-3 rounded-xl "></input>
                    <div className="flex justify-between w-[101%]">
                        <input placeholder="Primeira data" className="p-2 w-[50%] mx-1 rounded-xl" type="date"></input>
                        <input placeholder="Orçamento" className="p-2 w-[50%] mx-1 rounded-xl"></input>
                    </div>
                    <button className="bg-primary w-[100%] p-2 my-3 rounded-xl text-white font-semibold hover:bg-primaryHover">Buscar</button>
                </div>
            </div>
        </>
    );
}

export default TripSearch



/*

- Find React calendar library (date picker)
- Find React currency library





*/