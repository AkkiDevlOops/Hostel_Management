"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Navbar from '@/components/Navbar';
import Link from 'next/link';


export default function grbagemanagement(){

// const getUserLocation = ()=>{
//   navigator.geolocation.getCurrentPosition(
//     (position)=>{
//       setuserLocation({
//       lat: position.coords.latitude,
//       long: position.coords.longitude
//       });
//     },
//     (error) =>{
//       alert("location access denied");
//     }
//   )
// }

const [img,setimg] = useState();
const [pimg,setpimg] = useState(false);
const [preview,setpreview] = useState();
const [field1, setfield1] = useState("");
const [field2, setfield2] = useState("");
const [field3, setfield3] = useState("");
const [user,setUser] = useState("");
const [complainid, setComplainid] = useState("");
 
// async function handleimage(e) {
//   e.preventDefault();

//   // const files = Array.from(e.target.files);
//   const file = e.target.file
//   const url = URL.createObjectURL(file)
//   // const urls =  files.map(files =>URL.createObjectURL(files));
//   setpreview(url);
//   console.log(url);
// }

const formData = new FormData();
formData.append("field1",field1);
formData.append("field2",field2);
formData.append("field3",field3);
// formData.append("image",img);


async function getid() {
  try{
  const response = await fetch("/api/student/session",{
    method: "POST",
    headers : {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify()
  })
  const data = await response.json()
  console.log(data.student);
}catch(err){
  console.log(err);
}
}





async function submitHandler(e) {
  e.preventDefault();
  try {
    const response = await fetch("/api/student/garbage",{
      method: "POST",
      
    
    body : 
        formData,
      
  })
  const data = await response.json();
  if(data){
    setComplainid(data.date);
    alert(data.msg);
  }

} catch (error) {
    console.log(error);
  }
}

// async function handleimg (e) {
//     try{
    
//     const file = Array.from(e.target.files);
//     setimg(file);
//     const url = file.map(file=>URL.createObjectURL(file))
//     setpimg(true)
//     setpreview(url)               
//     }catch(error){
//       console.log(error);
//     }  
// }


  return (
    
      <>
      <div className='overflow-x-hidden'>
        
      <Navbar/>
    <main className="min-h-screen pt-7 bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">

    

        <h1 className="text-2xl mx-auto font-bold text-gray-800 text-center">
          Garbage Management System
        </h1>
     
        {/* <div className='w-1/4 mt-5 h-15 text-center flex justify-center items-center mx-auto bg-blue-300 text-white rounded-full border '>
        <label className='font-bold text-white '>
        Upload image
        <input
    type='file'
    onChange={handleimg}
    accept='image'
    capture="environment"
    className='hidden'    ></input>
      </label></div> */}
        
        <p className="mt-2 text-center text-gray-500">
          Report garbage details for proper waste management
        </p>

        <div>

        </div>

        <form onSubmit={submitHandler} className="mt-8 space-y-6">
          {/* Garbage Type */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Garbage Type
            </label>

            <select
              name="garbageType"
             onChange={(e)=>setfield1(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-green-500"
            >
              <option value="">Select garbage type</option>
              <option value="Organic">Organic Waste</option>
              <option value="Plastic">Plastic Waste</option>
              <option value="Paper">Paper Waste</option>
              <option value="Glass">Glass Waste</option>
              <option value="Metal">Metal Waste</option>
              <option value="Electronic">Electronic Waste</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              onChange={(e)=>setfield2(e.target.value)}
              required
              rows={5}
              placeholder="Enter garbage details..."
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-green-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
             where is it Located?
            </label>
            
            <input
              type="text"
              name="location"
              onChange={(e)=>setfield3(e.target.value)}
              required
              placeholder="Enter location"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-green-500"
            />
          </div>

          {/* {pimg &&(
            <div className='w-full h- mx-55  justify-center'>
              <img className='h-35' src={preview}/>
            </div>
          )} */}

          {/* <button className='bg-red-600' onClick=>
          <a href='https://www.google.com/maps?q=${userLocation.lat},${userLocation.lng}'></a>
          pin location</button>
          <p>{userLocation}</p> */}
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Submit Report
          </button>
        </form>
        <div className='w-25 h-10'>
{/* <button onClick={(e)=>img.src(image1)}>show</button> */}
      {/* <img src={null || URL.createObjectURL(image1)}/> */}
    </div>
      </div>
    </main>
    
    
      
  
    </div>
 </>

  )
}

