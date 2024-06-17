import React, { useState } from 'react'
import RemoveandADD from './RemoveandADD'

function StudentName(props) {

    let sname=props.sname
    let name=props.name
    let index=props.index
    let setsname=props.setsname
    ///////////////////////////////////////////
   let add=props.add
  
   let setadd=props.setadd
    function handleADD(index){
        setadd([...add,name])
        setsname(sname.filter((item,ind)=>ind!==index))

    }
  return (
    <div>
        <div>
        <div key={index} className="flex mt-2 justify-between">
        <p>{index+1}.{name}</p>
        <button onClick={()=>handleADD(index)} className="bg-emerald-300 p-1 mb-1 text-white">Add Favourite</button>
        </div>

        </div>
        
        <div>
        <div>
         
            {/* <p>{add}</p> */}
        </div>
        </div>
        
      
    </div>
    
  )
}

export default StudentName
