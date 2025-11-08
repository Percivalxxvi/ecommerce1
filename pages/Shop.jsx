import React, { useEffect } from 'react'
import Navpc from "../components/Navpc";
import Navmob from "../components/Navmob";
import { Link } from "react-router-dom";
import Apicomp1 from "../components/Apicomp1";
import { useData } from "../store";
import Heroslider from "../components/Heroslider";
import Navbar from '../components/Navbar';

const Shop = () => {
   const {value,FetchData}=useData()
      console.log(value)
  
      useEffect(()=>{
          FetchData()
      },[])
  return (
    <div>
      <Navbar page="shop" />
      <div className="h-fit lg:bg-[#f5f5f5] bg-amber-600 flex items-center justify-center">
        <div className="flex lg:gap-5 gap-1 flex-wrap items-center justify-center">
          {value.map((item, index) => (
            <Apicomp1 page="shop" key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop