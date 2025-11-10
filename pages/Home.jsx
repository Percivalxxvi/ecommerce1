import React, { useEffect, useState } from 'react'
import '../src/App.css'
import Navpc from '../components/Navpc'
import Navmob from '../components/Navmob'
import { Link } from "react-router-dom";
import Apicomp1 from '../components/Apicomp1';
import { useData } from '../store';
import Heroslider from '../components/Heroslider';
import ProductSlider from '../components/ProductSlider';
import Navbar from '../components/Navbar';
import Apicomp2 from '../components/Apicomp2';
import Apicomp3 from "../components/Apicomp3";
import Footer from '../components/Footer';
import PopularCollaborators from '../components/Popularcollaborators';
import DiscountPromo from '../components/DiscountPromo';

const Home = () => {
    const {value,FetchData}=useData()
    console.log(value)

    useEffect(()=>{
        FetchData()
    },[])

    // FetchData()
  return (
    <div>
      {/* <Navpc /> */}
      {/* <Navmob /> */}
      {/* <div className="h-13"></div> */}
      {/* <div className="lg:flex bg-[#5677fc] gap-3 h-20 items-center pl-25 hidden">
        <Link to="/" className="hover:text-white">
          Home
        </Link>

        <Link to="/shop" className="hover:text-white">
          Shop
        </Link>

        <Link to="/about" className="hover:text-white">
          About
        </Link>

        <Link to="/contact" className="hover:text-white">
          Contact
        </Link>

        <Link to="/search" className="hover:text-white">
          Search
        </Link>
      </div> */}
      <Navbar page="home" />

      <div className="lg:h-screen h-fit bg-b[#f5f5f5] flex lg:flex-row flex-col items-center justify-center gap-5">
        <div className="flex h-3/4 lg:w-3/5 w-4/4">
          <Heroslider />
        </div>
        <div className="flex flex-col lg:h-3/4 lg:w-1/5 w-[90%] h-fit justify-between">
          <div className="h-5/7 bg-[url('https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h4-sidebar-img-1.jpg')] bg-center bg-cover flex flex-col items-center justify-center gap-3">
            <h1 className="text-4xl text-center w-[90%] text-white">
              Shop to Get What You Love
            </h1>
            <Link to="/shop">
              <button className=" h-10 w-50 bg-blue-500 rounded-3xl text-white font-semibold mb-5 hover:cursor-pointer">
                Shop Now
              </button>
            </Link>

            {/* <img
              className="bottom-0 relative h-30"
              src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              alt=""
            /> */}
          </div>
          <div className="h-[26%] flex bg-[url('https://images.unsplash.com/photo-1605086998237-c34aa10126f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjB3aXRoJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600')] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center">
              <h1 className="ml-5 text-black text-2xl">
                Mobiles & <br /> Tablets
              </h1>
              <Link className="ml-5 underline text-blue-700">Shop Now</Link>
            </div>
            <div>{/* <img src="" alt="" /> */}</div>
          </div>
        </div>
      </div>

      <div className="h-120 bg-[#f5f5f5] lg:flex hidden items-center justify-center">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {value
            ?.slice() // clone the array so you don’t mutate the original
            .sort(() => Math.random() - 0.8) // shuffle order
            .slice(0, 5) // pick first 5
            .map((item, index) => (
              <Apicomp1 key={index} data={item} />
            ))}
        </div>
      </div>

      <ProductSlider />

      <div className="lg:h-120 h-fit bg-[#ffffff] flex lg:flex-row flex-col items-center justify-center gap-5">
        <div className='bg-[url("https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h5-img-1.jpg")] bg-center bg-cover h-75 w-95 flex flex-col justify-center items-center'>
          <h1 className="text-center text-xl mb-8 w-[70%]">
            More personal, More powerful, More playful
          </h1>
        </div>
        <div className='bg-[url("https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h5-img-2.jpg")] bg-center bg-cover h-75 w-95 flex flex-col justify-center items-center'>
          <h1 className="text-center text-xl mb-8 w-[70%]">
            The biggest risk is a missed opportunity
          </h1>
        </div>
        <div className='bg-[url("https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h5-img-3.jpg")] bg-center bg-cover h-75 w-95 flex flex-col justify-center items-center'>
          <h1 className="text-center text-xl mb-8 w-[70%]">
            The secret to getting ahead is getting started
          </h1>
        </div>
      </div>

      <div></div>
      <div className="h-fit bg-[#f2f0f0] lg:flex hidden items-center justify-center pt-5 pb-5">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {value
            ?.slice() // clone the array so you don’t mutate the original
            .sort(() => Math.random() - 0.9) // shuffle order
            .slice(0, 5) // pick first 5
            .map((item, index) => (
              <Apicomp2 key={index} data={item} />
            ))}
        </div>
      </div>

      <DiscountPromo/>

      <div className="h-120 bg-[#f5f5f5] lg:flex hidden items-center justify-center">
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {value
            ?.slice() // clone the array so you don’t mutate the original
            .sort(() => Math.random() - 0.8) // shuffle order
            .slice(0, 5) // pick first 5
            .map((item, index) => (
              <Apicomp1 key={index} data={item} />
            ))}
        </div>
      </div>

      <ProductSlider />

      <PopularCollaborators/>

      <div className='lg:h-screen bg-[url("https://cyberstore.qodeinteractive.com/wp-content/uploads/2017/08/h2-parallax-1.jpg")] bg-cover bg-center-center bg-fixed flex lg:flex-row flex-col items-center justify-center gap-2'>
        <div className="h-100 w-100 bg-amber-300">
          <div className="h-100 bg-white flex items-center justify-center">
            <div className="flex gap-5 flex-wrap items-center justify-center bg-amber-500">
              {value
                ?.slice() // clone the array so you don’t mutate the original
                .sort(() => Math.random() - 0.2) // shuffle order
                .slice(0, 1) // pick first 5
                .map((item, index) => (
                  <Apicomp1 key={index} data={item} />
                ))}
            </div>
          </div>
        </div>
        <div className="h-100 w-100 flex flex-col justify-between">
          <div className="h-49 bg-white flex items-center justify-center">
            <div className="flex gap-5 flex-wrap items-center justify-center bg-amber-500">
              {value
                ?.slice() // clone the array so you don’t mutate the original
                .sort(() => Math.random() - 0.6) // shuffle order
                .slice(0, 1) // pick first 5
                .map((item, index) => (
                  <Apicomp3 key={index} data={item} />
                ))}
            </div>
          </div>
          <div className="h-49 bg-white flex items-center justify-center">
            <div className="flex gap-5 flex-wrap items-center justify-center bg-amber-500">
              {value
                ?.slice() // clone the array so you don’t mutate the original
                .sort(() => Math.random() - 0.1) // shuffle order
                .slice(0, 1) // pick first 5
                .map((item, index) => (
                  <Apicomp3 key={index} data={item} />
                ))}
            </div>
          </div>
        </div>
        <div className="h-100 w-100 flex flex-col justify-between">
          <div className="h-49 bg-white flex items-center justify-center">
            <div className="flex gap-5 flex-wrap items-center justify-center bg-amber-500">
              {value
                ?.slice() // clone the array so you don’t mutate the original
                .sort(() => Math.random() - 0.5) // shuffle order
                .slice(0, 1) // pick first 5
                .map((item, index) => (
                  <Apicomp3 key={index} data={item} />
                ))}
            </div>
          </div>
          <div className="h-49 bg-white flex items-center justify-center">
            <div className="flex gap-5 flex-wrap items-center justify-center bg-amber-500">
              {value
                ?.slice() // clone the array so you don’t mutate the original
                .sort(() => Math.random() - 0.9) // shuffle order
                .slice(0, 1) // pick first 5
                .map((item, index) => (
                  <Apicomp3 key={index} data={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-50 bg-purple-600"></div> */}
      <Footer/>
    </div>
  );
}

export default Home