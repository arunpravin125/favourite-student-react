import React from 'react'
import { Link } from 'react-router-dom'
import RemoveandADD from '../components/RemoveandADD'

function Favourite(props) {
  let sname=props.sname
  let setsname=props.setsname
  //   let name=props.name
  //   let index=props.index
  let add=props.add
 let setadd=props.setadd
 let remove=props.remove
 let setremove=props.setremove
  
  return (
    <div>
        <h1 className="text-center text-3xl bg-yellow-200 p-1">Favourite student</h1>
        <div className="bg-yellow-200 p-10 h-full w-full">
   
            <div className="flex justify-between">
                
                <div><Link className="hover:underline font-bold text-2xl" to="/studentlist">Student list</Link></div>
                <div><Link className="hover:underline  font-bold text-2xl"  to="/favpage">Favourite list</Link></div>
             


            </div>
        </div>
        
        <div>
            <div className="bg-red-200 h-100% p-5">
              <RemoveandADD sname={sname} setsname={setsname} add={add} setadd={setadd} remove={remove} setremove={setremove}></RemoveandADD>

        </div>
        </div>
        
        
      
    </div>
  )
}

export default Favourite
