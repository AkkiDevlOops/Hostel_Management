"use client";
import React, { useEffect, useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export default function Attendancewindow(){

  const [token,settoken ] = useState("");
const [Open,setOpen] = useState(false);

  useEffect(() => {
  console.log("Token state changed:", token);
}, [token]);

  async function gettoken() {
  const response = await fetch("/api/student/attendance", {
    credentials: "include",
    method: "POST",
  });

  console.log("Status:", response.status);

  const data = await response.json();

  console.log("Received:", data);

  settoken(data.res);
  setOpen(true);
}




// async function gettoken(){
//   const response = await fetch("/api/student/attendance",{
//     method: "POST",
//     headers : {
//       "Content-Type" : "application/json" 
//     },
    
//   })

//   const data = await response.json();
//   settoken(data.res);
  
//   console.log("Data:", data);
//   console.log("Res:", data.res);


  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 flex justify-center items-center px-4">
    <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

      <h1 className="text-3xl font-bold text-gray-800">
        Daily Attendance
      </h1>

      <p className="text-gray-500 mt-2">
        Generate today's QR code for attendance.
      </p>

      <div className="mt-8 flex justify-center">
        {Open ? (
          <div className="bg-white p-4 rounded-xl shadow-md border">
            <QRCodeCanvas
              value={token}
              size={250}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
          </div>
        ) : (
          <div className="w-[250px] h-[250px] border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            QR Code will appear here
          </div>
        )}
      </div>

      <p className="break-all text-xs">{token}</p>

      <button
        onClick={() => {
          gettoken();
          setOpen(true);
        }}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl shadow-md"
      >
        Generate QR
      </button>

    </div>
  </div>
);
}
