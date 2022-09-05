import { useState,useEffect,useRef} from 'react';



const useBts = () =>{
  
  const [bts,setBts]=useState([]);

  useEffect(() =>{
    obtenerDatos();
  },[])

  //Obtenemos la Api
    const obtenerDatos = async () =>{
    const data= await fetch('https://bts-quotes-api.herokuapp.com/quotes')
    const members=await data.json()
    setBts(members)
 }
 return bts;
};

export default useBts;