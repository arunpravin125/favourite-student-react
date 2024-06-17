import React from 'react'
import Student from './Student'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favourite from './pages/Favourite'
import Studentlist from './Studentlist'
import { useState } from 'react'

function App() {
  let [sname,setsname]=useState(["Arunpravin","Navinvarma","Pragadeesh","Ashok","Vijay","Ajay"])
  let [add,setadd]=useState(["arun",'ajay'])
  console.log({add})
  let [remove,setremove]=useState("")
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Student/>}></Route>
        <Route path="/favpage" element={<Favourite sname={sname} add={add} setadd={setadd} remove={remove} setremove={setremove} setsname={setsname}/>}></Route>
        <Route path="/studentlist" element={<Studentlist add={add} setadd={setadd} remove={remove} setremove={setremove} sname={sname} setsname={setsname}/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App

