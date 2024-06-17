import React from 'react'
import { Link } from 'react-router-dom'
import ListName from './components/ListName'
function Studentlist(props) {
  let sname=props.sname
  let name=props.name
 let setsname=props.setsname
 //////////////////////////
 let add=props.add
 let setadd=props.setadd
 let remove=props.remove
 let setremove=props.setremove
  // let index=props.index
  return (
    <div>
         <h1 className="text-center text-3xl bg-yellow-200 p-1">Student list</h1>
        <div className="bg-yellow-200 p-10 h-full w-full">
            
   
            <div className="flex justify-between">
                
                <div><Link className="hover:underline font-bold text-2xl" to="/studentlist">Students</Link></div>
                <div><Link className="hover:underline font-bold text-2xl"  to="/favpage">Favourite list</Link></div>
             


        </div>
        
        </div>
            <div className="bg-red-300 h-100p% p-5">
                <ListName add={add} setadd={setadd} remove={remove} setremove={setremove} sname={sname} setsname={setsname}></ListName>
                
            </div>
      
    </div>
  )
}

export default Studentlist
