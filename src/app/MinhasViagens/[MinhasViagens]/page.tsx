import React from "react";


export default async function MinhasViagens({ params }: { params: { MinhasViagens: string } }) {

    return (
        <div className="bg-gray-400">
            Minhas viagens
            {params.MinhasViagens}
          </div>
    );
}



/*

Fetch minhas viagens aqui:
http://localhost:3000/apitripreser


*/
