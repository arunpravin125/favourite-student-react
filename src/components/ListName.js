import React from 'react'
import { useState } from 'react'
import StudentName from './StudentName'

function ListName(props) {
    let sname=props.sname
    let name=props.name
    let index=props.index
    let setsname=props.setsname
    let add=props.add
    let setadd=props.setadd

    // let [sname,setsname]=useState(["Arunpravin","Ashok"])
  return (
    <div>
        {
            sname.map(function(name,index){
                return(<StudentName add={add} setadd={setadd} name={name} index={index} sname={sname} setsname={setsname}></StudentName>
                )
            })
        }
      
    </div>
  )
}

export default ListName
