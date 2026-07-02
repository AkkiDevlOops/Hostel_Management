"use client";


import { useState } from "react";
import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner'

export default function Qrscan() {         
  
  // const[status,setStatus] = useState("not requested");

  // async function RCP() {
  //   try{
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //     });
  //     setStatus("allowed");
  //     stream.getTracks().forEach((track)=>track.stop());
  //   }catch (err) {
  //     console.error(err);
  //     setStatus("❌ Camera Permission Denied");
  //   }
  // }

  return (
    
    <div className='min-h-screen flex justify-center items-center pt-7 bg-gray-100 pc-4 '>
      
        <div className="w-full max-w-sm aspect-square">
          <button onClick={()=>RCP()}>click me </button>
        <Scanner
        constraints={{
    video: {
      facingMode: "environment",
    },
  }}
        onScan={(result)=>console.log(result)}
        ></Scanner>
        
        </div>
    
    </div>
  );
}


