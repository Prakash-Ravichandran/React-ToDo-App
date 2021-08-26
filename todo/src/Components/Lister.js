import React from 'react';


export default function Lister({taskName}){

    return(
        <>
        {/* <span><img src={isActive ? green : normal}/></span> */}
         <p>{taskName}</p>
        </>
    );
};