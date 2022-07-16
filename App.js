import React, {useEffect, useState } from "react";
import axios from 'axios';  //imp

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setmoves] = useState();

  useEffect(()=>{
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)  //imp
      // console.log(res.data.name)
      setName(res.data.name)
      setmoves(res.data.moves.length)
      
    }
    getData()
  })

  return(
  <>
<h1>I am selected {num} value</h1>
<h1>My Name is  {name} </h1>
<h1>I have {moves} moves</h1>



  <select name="" id="" value={num} onChange={(event)=>{
setNum(event.target.value)
  }}>
    <option value="1">1</option>
    <option value="25">25</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  </>
)};
export default App;
