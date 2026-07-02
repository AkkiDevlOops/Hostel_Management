"use client";
import Navbar from "@/components/Navbar";

import { useState } from "react";

export default function signup() {
  
  const [img,setimg] = useState("");
  const [previewimg,setpriviewimg] = useState(true);

  async function handleimg(e){
    e.preventDefault();

    const file = e.traget.file([0]);
    if(file){
      setimg(file);
      setpriviewimg(true);
    }

  }
 
    

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
      // onSubmit={handlesubmit}
        
        className="w-full max-w-md p-6 border rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold mb-4">Register Yourself</h1>

<input
          type="text"
          name="Enrollment number"
          placeholder="Enrollment number"
          
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
         
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          
          className="w-full border p-2 mb-4 rounded"
          required
        />

        <input className="m-5"
        type="file"
        name="user-profile"
        accept="image/*"
        
        />

        {previewimg&&(
          <div className="bg-amber-300 w-full h-20">
            <img className="w-16 h-16" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          </div>
        )}


        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          Sign Up
        </button>

        
      </form>
    </div>
  );
}