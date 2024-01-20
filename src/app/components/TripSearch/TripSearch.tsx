"use client"
import React from "react";

const TripSearch = () => {
    return (
        <>
            <div className="bg-gray-300">
                <div className="container mx-auto bg-red-300 p-5 items-center justify-between flex flex-col">
                    <h1>Encontre sua próxima viagem!</h1>
                    <input placeholder="Onde você quer ir?"></input>
                    <div>
                        <input placeholder="Primeira data"></input>
                        <input placeholder="Orçamento"></input>
                    </div>
                    <button>Buscar</button>
                </div>
            </div>
        </>
    );
}

export default TripSearch



/*

- Find React calendar library
- Find React currency library

1:44:32 do video 2


*/