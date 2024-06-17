import React from 'react'
import { Link } from 'react-router-dom'

function Student() {
  return (
    <div>
        <div className="bg-yellow-200 p-10 h-full w-full">
   
            <div className="flex justify-between">
                
                <div>
                    <Link className="hover:underline" to="/studentlist" >Student list</Link>
                </div>
                <div>
                    <Link className="hover:underline"  to="/favpage">Favourite list</Link>
                </div>
             


            </div>
        </div>
      
    </div>
  )
}

export default Student
