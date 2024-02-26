"use client"
import "./styles.css"
import React, { useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const { status, data } = useSession();
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const handleLoginClick = () => { signIn() }
    const handleLoginOut = () => {
        setMenuIsOpen(false);
        signOut();
    }
    const userData:string = String(data?.user?.name)

    function hideMenu(){
        setMenuIsOpen(false)
    }

    const handleMenuClick = () => { setMenuIsOpen(!menuIsOpen) }
    return (
        <div className="container mx-auto p-5 flex justify-between py-0 h-[93px] items-center lg:w-3/4">
             <Link href={`/`}>
            <div className="logo-name h-[32px] w-[182px] items-center">
                <GiCommercialAirplane style={{ color: '#590BD8' }} className="logo-name-airplane" />
                <h2 className="text-primary font-semibold">BonVoyage</h2>
            </div>
            </Link>

            {status === "unauthenticated" && (
                <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>
            )}
            {status === "authenticated" && data.user && (
                <div className="flex items-center gap-3 border-grayPrimary border border-solid rounded-full p-2 px-3 cursor-pointer relative w-[100px] shadow-xl">
                    <AiOutlineMenu size={16} onClick={handleMenuClick} />
                    <Image width={35} height={35} src={data.user.image!} alt={data.user.name!} className="rounded-full shadow-md" />
                
                    {menuIsOpen && (
                        <>
                        <Link href={`/MinhasViagens/${userData}`} onClick={()=>hideMenu()}>
                        <div className="absolute top-16 left-0 w-full h-full bg-white rounded-t-lg shadow-xl flex flex-col justify-center items-center z-10 ">
                            <button className="text-primary text-sm font-semibold">Minhas viagens</button>
                        </div>
                        </Link>
                        <div className="absolute top-28 left-0 w-full h-full bg-white rounded-b-lg shadow-xl flex flex-col justify-center items-center z-10 border-t-2" onClick={()=>hideMenu()}>
                            <button className="text-primary text-sm font-semibold" onClick={handleLoginOut}>Logout</button>
                        </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
