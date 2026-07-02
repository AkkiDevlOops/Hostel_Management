"use client";
import React from 'react'

export default function Navbar() {
  return (
    <div>
         <nav  className=" top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg py-4">
        <div  className="max-w-7xl mx-auto px-5">
            <div  className="flex justify-between items-center">

                {/* <!-- Logo --> */}
                <div>
                    <h2  className="text-3xl font-bold text-indigo-500">
                         HostelHub
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
                            <a href="#services"  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                                Complaint
                            </a>
                        </li>

                        <li>
                            <a href="/grbagemanagement"  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                                 Garbage Management
                            </a>
                        </li>

                        <li>
                            <a href="#"  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                            
                            </a>
                        </li>

                        <li>
                            <a href="#"  className="flex items-center gap-2 text-gray-700 font-medium hover:text-indigo-500 transition">
                              
                            </a>
                        </li>
                    </ul>

                    

                    <button 
                         className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-indigo-50 hover:text-indigo-500 transition font-medium"
                         >
                        <i  className="fas fa-user"></i>
                        <span id="username">John Doe</span>
                    </button>
                    <div  className="bg-while rounded-full w-5 h-5 border-black border-2"></div>
                </div>

                {/* <!-- Mobile Menu Button --> */}
                <button  className="md:hidden text-2xl text-gray-700" >
                    <i  className="fas fa-bars"></i>
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





