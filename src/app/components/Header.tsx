"use client"
import "./styles.css"
import React, { useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";


export default function Header() {
    const { status, data } = useSession();
    const [menuIsOpen, setMenuIsOpen ] = useState<boolean>(false);

    const handleLoginClick = () => { signIn() }


    return (
        <>
            <div className="container mx-auto p-5 flex justify-between">
                <div className="logo-name items-center">
                    <GiCommercialAirplane className="logo-name-airplane" />
                    BonVoyage
                </div>

                {status === "unauthenticated" && (
                    <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>
                )}
                {status === "authenticated" && data.user && (
                    <div className="flex items-center gap-3 border-grayPrimary border border-solid rounded-full p-2">
                        <AiOutlineMenu size={16} />
                        <Image width={30} height={30} src={data.user.image!} alt={data.user.name!} className="rounded-full" />
                    </div>

                )}
            </div>

        </>
    );
}
