import React, { useState } from 'react';



export default function DateComponent(){
    const [dates,setDates] = useState(new Date())
    const interVal = setInterval(()=> setDates( new Date()),1000);
    return(
        <>
         {`${dates.toLocaleString()}`}
        </>
    );
}