"use client"
import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-400 h-24 pt-3 mt-72 py-4">

            <div className="flex h-[32px] w-[140px] items-center m-auto justify-between">
                <Link href={`/`} className="flex h-[32px] w-[135px] items-center m-auto justify-between">
                    <GiCommercialAirplane style={{ color: '#590BD8', fontSize: '100px', marginRight: '10px' }} />
                    <h2 className="text-primary font-semibold">BonVoyage</h2>
                </Link>
            </div>
            <p className="text-sm w-36 m-auto text-center mb-4">Created by Ramon</p>
        </div>
    );
}
