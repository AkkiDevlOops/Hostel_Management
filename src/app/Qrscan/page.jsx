"use client";
import { useEffect, useState } from "react";
import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';
import AuthProvider from "@/context/context";
import { useAuth } from "@/context/context";

  

export default function Qrscan() {
   const { student,loading } = useAuth();
  const[working,setworking] = useState(false)
  const[QRdata,setQRdata] = useState("");
  
  useEffect(()=>{
    if (student) {
    setworking(true);
}
  })
  
  try {
   
  if (loading) {
    return <div>Loading authentication data...</div>;
}
    console.log(student);
  } catch (err) {
    console.log(err);
  }

  const getQRvalue= ()=> {
    if(!QRdata){
      console.log("no value found");
  
}
console.log(QRdata[0].rawValue)
  }

console.log(useAuth());
  return (
    <div className="min-h-screen bg-gray-100 pt-6">      {working&&(
        <h1 className="font-bold ml-7 from-neutral-00 text-gray-900 text-3xl">{student.name} Daily Attendance</h1>
      )}
      <div className="flex justify-center">
    <div className='rounded-xl m-5 shadow-md  border-2 border-blue-500 mt-7 grid grid-cols-1 max-w-auto gap-10  p-7 bg-gray-100 '>
      
      <p className="font-mono text-center" >Scan this QR to get your Attendance done</p>
      
        <div className=" bg-gray-50 border-gray-950 h-64 ">
          
        <Scanner
        constraints={{
    video: {
      facingMode: "environment",
    },
  }}
        onScan={(result)=>setQRdata(result)}
        ></Scanner>
        <button onClick={()=>getQRvalue()}>get data</button>
        </div>
    
    </div>
    </div>
    </div>

  );
}


