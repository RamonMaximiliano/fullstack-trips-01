import Image from "next/image";
import React from "react";

export default function Header() {
    return (
        <>
            <div className="container mx-auto">
                <Image width={150} height={30} src="/airplane.png" alt="Full Stack Week"></Image>
            </div>
        </>
    );
}
