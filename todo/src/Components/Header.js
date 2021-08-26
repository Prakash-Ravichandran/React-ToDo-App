import React, { useState } from 'react';
import DateComponent from './Date';


export default function Header(){
    return(
        <>
        <div className="header-group">
        <div>
            <DateComponent />
        </div>
        <div className="taskgroups">
            <span>All Tasks</span>
            <span>Incomplete Tasks</span>
            <span>Complete Tasks</span>
        </div>
        </div>
        </>
    );
}