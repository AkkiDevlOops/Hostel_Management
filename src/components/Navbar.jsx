"use client";
import React, { useEffect, useState } from 'react'
// import { useUser } from '@/context/UserContext';
import { underwork } from '@/lib/underwork';
import { useAuth } from '@/context/context';

export default function Navbar() {
    const {student,loading} = useAuth();
    
    async function handleissue() {
        underwork()
    } 

    const [admin,setadmin] = useState();
    const [profile,setprofile] = useState("https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png")
    // const {user} = useUser();


        try {
         
        if (loading && !student) {
          console.log("Loading authentication data...");
      }
        //   console.log(student);
            // setadmin(student?.name)
            // console.log(admin);
        } catch (err) {
          console.log(err);
        }
                  useEffect(()=>{
        })

        
  return (
    <div>
         <nav  className=" top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg py-4">
         {/* <p>{user?`hello ${user.Name}`:"login"}</p> */}
        <div  className="max-w-7xl mx-auto px-5">
            <div  className="flex justify-between items-center">

                {/* <!-- Logo --> */}
                <div>
                    <h2  className="text-3xl font-bold text-indigo-500">
                        <a href='/'>HostelHub</a> 
                    </h2>
                </div>
{/* 
                <!-- Desktop Menu --> */}
                <div  className="hidden md:flex items-center gap-8">
                    <ul  className="flex gap-8">
                        <li>
                            <a href="/"  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                                Dashboard
                            </a>
                        </li>

                        <li>
                            <a 
                            href="/complaints"
                              className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                                Complaints
                            </a>
                        </li>

                        <li>
                            <a href="/grbagemanagement"  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                                 Garbage Management
                            </a>
                        </li>

                        <li>
                            <a href={admin?"/Attendancewindow":"/Qrscan"}  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                            {admin?"Attendance QR":"Attendance"}
                            </a>
                        </li>

                        <li>
                            <a href="#"  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                              
                            </a>
                        </li>
                    </ul>

                    <div className='flex items-center bg-indigo-500 text-white rounded-4xl px-5 p-2'>
                    <div  className="bg-while rounded-full w-10 h-10  border-white border-2">
                        <img src={profile} alt='student-profile' className='rounded-full p-0.5'/>
                    </div>
                    <button 
                    onClick={handleissue}
                         className="flex items-center gap-2 px-1 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-500 transition font-medium"
                         >
                        <i  className="fas fa-user"></i>
                        <span id="username">{student?.name}</span>
                        
                    </button>
                    </div>
                </div>
                
                {/* <!-- Mobile Menu Button --> */}
                <button  className="md:hidden text-2xl text-gray-700" >
                    <i  className="fas fa-bars"></i>
                    {student?.name}
                </button>
            </div>

            {/* <!-- Mobile Menu --> */}
            <div id="mobileMenu"
                 className="hidden md:hidden flex-col gap-5 mt-5 bg-white rounded-xl p-5 shadow-lg">

                <a href="#dashboard"  className="text-gray-700 hover:text-indigo-500">Dashboard</a>
                <a href="#services"  className="text-gray-700 hover:text-indigo-500">Rooms</a>
                <a href="#"  className="text-gray-700 hover:text-indigo-500">Payments</a>
                <a href="#"  className="text-gray-700 hover:text-indigo-500">Mess</a>
                <a href="#"  className="text-gray-700 hover:text-indigo-500">Maintenance</a>

                <button
                     className="bg-indigo-500 text-white py-2 rounded-full">
                    Login
                </button>
            </div>
        </div>
    </nav>
    </div>
  )
}





