import React from 'react'

function RemoveandADD(props) {
    let add=props.add
    let setadd=props.setadd
   
    let sname=props.sname
    let setsname=props.setsname

    // function handleADD(index){
    //     setadd([...add,name])
    //     setsname(sname.filter((item,ind)=>ind!==index))

    // }
    function handleRemove(index){
        setadd(add.filter((items,ind)=>
            ind!==index,
      
    
    ))
   
    setsname([...sname,add[index]])

        // setadd([add.filter(function(items,ind){
        //     return(
        //         ind!==index
        //     )
        // })])
    }
  return (
    <div>
       {
        add.map(function(added,index){

            return(
                <div className='flex justify-between' key={index}>
                    <p>{index+1}.{added}</p>
                     <button onClick={()=>handleRemove(index)} className="bg-red-500 p-1 mb-1 text-white">Remove</button>
                </div>
            ) 
        })
       }
    </div>
  )
}

export default RemoveandADD
