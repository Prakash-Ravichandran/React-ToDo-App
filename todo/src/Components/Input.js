import { element } from 'prop-types';
import React, { useState } from 'react';
import Lister from './Lister';


export default function Input(){
    const[taskName,setTaskName] = useState('');
   function handleChange(event){
          addTask(event.target.value);
    }

    function addTask(value){
        console.log('hello');
        setTaskName(value);
    }
    return(
        <>
        <div className="input-group">
        <input type="text" name="task" placeholder="Enter a task..." onChange={handleChange}/>
        <button onClick={() => addTask()}>Add a Task</button>
        <Lister taskName={taskName}/>
        </div>
        </>
    );
}