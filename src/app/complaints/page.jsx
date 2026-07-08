"use client";
import React, { useEffect, useState } from "react";
import { getUser } from "@/lib/getuser";
import { useAuth } from "@/context/context";

let complaints = [ ];

export default function ComplaintsPage() {

  const { student,loading } = useAuth();
  const [image,setimage] = useState("https://assets.cntraveller.in/photos/6621101e437714505a7ebe56/2:3/w_2666,h_3999,c_limit/GettyImages-1439040510.jpg");

     const[studentData,setstudentData] = useState([]);
     const[id, setid] = useState("")
    
    try {
     
    if (loading) {
      console.log("Loading authentication data...");
  }
    console.log(student?.id);
    
      
    } catch (error) {
      console.log(err);
    }

       async function getComplaints() {
       const response = await fetch("/api/student/complain"
      //   ,{
      //     method: "POST",
      //   headers:{
      //     "content-type" : "application/json"
      //   },
      //   body: JSON.stringify()
      //  }
      );
      const data = await response.json();
      complaints = data.Garbage
      const date = complaints[0].createdAT
      console.log();
    }

    useEffect(()=>{
      getComplaints();
    },
    // [student,loading]
  []
  )
    
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* <button
      onClick={submitHandler()}>Show complain</button> */}
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Complaints
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {complaints.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl grid grid-cols-20 columns-1-sm shadow-md p-5 border"
          >
            <div className="border-2 mx-2 mr-7 col-span-3 border-black">
              <img src={image} alt="Garbage-image" className="h-35 w-35"/>
            </div>
            <div className="col-span-17">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">
                {item.Garbage_type}
                </h2>
              <span className="text-sm text-gray-500">{item.createdAT.toString().slice(0,10)}</span>
            </div>

            <p className="text-gray-700">Description : {item.Description}</p>
            <p className="text-gray-700">Location : {item.Location}</p>
            </div>
          </div>
         ))} 
      </div>
    </div>
  );
}