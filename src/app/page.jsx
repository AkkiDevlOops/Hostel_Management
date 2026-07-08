"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { NextResponse } from "next/server";
// const { user } = useUser();
import { underwork } from "@/lib/underwork";
import { useAuth } from "@/context/context";


export default function Home() {
      const { student,loading } = useAuth();
      const [admin, setadmin] = useState(false);
      const [open, setOpen] = useState(true);
      const [isLogin, setIsLogin] = useState(true);
      const [email, setemail] = useState("");
      const [name, setname] = useState("");
      const [Enrollment, setEnrollment] = useState("");
      const [password, setpassword] = useState("");
      const [sid,setsid] = useState("");
      const [ssid,setssid] = useState("");
      const [user,setUser] = useState("");

      
   
        
        useEffect(()=>{
        try {
         
        if (loading) {
          console.log("Loading authentication data...");
      }
          console.log(student);
            // setOpen(false);
            // setIsLogin(true);
            setUser(student.name);
            console.log(open,isLogin);
        } catch (err) {
          console.log(err);
        }
        })


    async function handleissue() {
            underwork()
        } 

    
      async function submitHandler(e){
        e.preventDefault();
         const url = isLogin
         ? "/api/student/login"
         : "/api/student/signup";

        try {
            const response = await fetch(url,{
                credentials: "include",
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({
                    name,
                    Enrollment,
                    email,
                    password,
                }),
            });

            const data = await response.json();

                if (data) {
            alert(data.msg)
    
            if(data.msg=="User created"){
                setIsLogin(true)
            }
            
            if(data.msg=="Login success"){
                setOpen(false);
                setIsLogin(true);
                // getuser(data.sid);
                console.log("done")       
            }
        }
        } catch (error) {
            console.log(error);
        }
      }

  return (
   <>
  <div>
    
 
{/* ----- LOGIN WINDOW --------- */}

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] relative">
           

            <h2 className="text-2xl font-bold mb-4">
              {isLogin ? "Student Login" : "Student Registration"}
            </h2>

            <form className="space-y-3" onSubmit={submitHandler}>
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e)=>{
                    setname(e.target.value)
                  }}
                  className="w-full border p-2 rounded"
                />
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                  onChange={(e)=>{
                    setemail(e.target.value)
                  }}
                className="w-full border p-2 rounded"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  }}
                className="w-full border p-2 rounded"
              />

              {!isLogin && (
                <input
                  type="text"
                  value={Enrollment}
                  onChange={(e)=>{
                    setEnrollment(e.target.value)
                  }}
                  placeholder="Enrollment"
                  className="w-full border p-2 rounded"
                />
              )}

              {/* <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
                 //
              >
                {isLogin ? "Login" : "Register"}
              </button>
             */}
            
            <button className ="w-full bg-blue-600 text-white py-2 rounded" type="submit"
                // onClick={()=>{if(isLogin){
                //     setOpen(false)
                // }
                // }}
            >
                {isLogin? "Login":"SignUp"}</button>
            
            

            
            </form>
            <p className="mt-4 text-center">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button
                onClick={() =>{
                     setIsLogin(!isLogin)}
                 }
                className="ml-2 text-blue-600"
               
              >
                {isLogin ? "Register" : "Login"}
              </button>
          </div>
        </div>
      )}
    


<div className="font-sans bg-gradient-to-br from-indigo-500 to-purple-700 min-h-screen overflow-x-hidden">

    {/* <!-- Navbar --> */}
  

    {/* <!-- Hero --> */}
    <section  className="pt-40 pb-24 text-center text-white">
        <div  className="max-w-6xl mx-auto px-5">

            <h1  className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Welcome to HostelHub
            </h1>

            <p  className="text-xl opacity-90 max-w-3xl mx-auto mb-10">
                All your hostel management at one place
            </p>

            <div  className="flex flex-col sm:flex-row justify-center gap-4">

                <button 
                     className="border-2 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition">
                    Get Started
                </button>
            </div>
        </div>
    </section>

    {/* <!-- Dashboard --> */}
    <section id="dashboard"  className="py-20 bg-white/10 backdrop-blur-lg">
        <div  className="max-w-7xl mx-auto px-5">

            <h2  className="text-4xl font-bold text-center text-white mb-14">
                Student Dashboard
            </h2>

            <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                {/* <!-- Card --> */}
                <div 
                     className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 transition cursor-pointer">

                    <div  className="text-5xl mb-4">👨‍🎓</div>
                    <h3 id="totalStudents"  className="text-4xl font-bold text-indigo-500 mb-2">245</h3>
                    <p  className="text-gray-600 font-medium">Total Students</p>
                </div>

                <div 
                     className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 transition cursor-pointer">

                    <div  className="text-5xl mb-4">🏠</div>
                    <h3 id="totalRooms"  className="text-4xl font-bold text-indigo-500 mb-2">52</h3>
                    <p  className="text-gray-600 font-medium">Total Rooms</p>
                </div>

                <div 
                     className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 transition cursor-pointer">

                    <div  className="text-5xl mb-4">📊</div>
                    <h3 id="occupancyRate"  className="text-4xl font-bold text-indigo-500 mb-2">92.5%</h3>
                    <p  className="text-gray-600 font-medium">Occupancy Rate</p>
                </div>

                <div 
                     className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 transition cursor-pointer">

                    <div  className="text-5xl mb-4">🔧</div>
                    <h3 id="maintenanceRequests"  className="text-4xl font-bold text-indigo-500 mb-2">12</h3>
                    <p  className="text-gray-600 font-medium">Maintenance Requests</p>
                </div>

                <div 
                     className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 transition cursor-pointer">

                    <div  className="text-5xl mb-4">💰</div>
                    <h3 id="paymentsPending"  className="text-4xl font-bold text-indigo-500 mb-2">8</h3>
                    <p  className="text-gray-600 font-medium">Pending Payments</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Services --> */}
    <section id="services"  className="py-20 bg-white">
        <div  className="max-w-7xl mx-auto px-5">

            <h2  className="text-4xl font-bold text-center text-gray-800 mb-14">
                Our Services
            </h2>

            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* 
                <!-- Service Card --> */}
                <div  className="bg-indigo-50 border border-indigo-100 rounded-3xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition relative overflow-hidden">

                    <div  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

                    <div  className="text-6xl mb-6">🏠</div>

                    <h3  className="text-2xl font-bold text-gray-800 mb-4">
                        Room Booking
                    </h3>

                    <p  className="text-gray-600 mb-8">
                        Easy room allocation and management with real-time availability tracking.
                    </p>

                    <button 
                    onClick={underwork}
                         className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
                        Explore
                    </button>
                </div>

                <div  className="bg-indigo-50 border border-indigo-100 rounded-3xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition relative overflow-hidden">

                    <div  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

                    <div  className="text-6xl mb-6">🍽️</div>

                    <h3  className="text-2xl font-bold text-gray-800 mb-4">
                        Mess Management
                    </h3>

                    <p  className="text-gray-600 mb-8">
                        Complete meal plan management and automated billing system.
                    </p>

                    <button
                    onClick={underwork}
                         className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
                        Explore
                    </button>
                </div>

                <div  className="bg-indigo-50 border border-indigo-100 rounded-3xl p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition relative overflow-hidden">

                    <div  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

                    <div  className="text-6xl mb-6">🔧</div>

                    <h3  className="text-2xl font-bold text-gray-800 mb-4">
                        Maintenance
                    </h3>

                    <p  className="text-gray-600 mb-8">
                        Quick issue reporting and real-time maintenance request tracking.
                    </p>

                    <button 
                    onClick={underwork}
                         className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Login Modal --> */}
    <div id="loginModal"
         className="hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">

        <div  className="bg-white rounded-3xl p-8 w-[90%] max-w-md relative">

            <button 
                 className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-black">
                &times;
            </button>

            <h2  className="text-3xl font-bold text-center mb-8 text-gray-800">
                <i  className="fas fa-sign-in-alt"></i> Student Login
            </h2>

            <form id="loginForm">

                <div  className="mb-6">
                    <label  className="block mb-2 font-medium text-gray-700">
                        <i  className="fas fa-id-card"></i> Student ID
                    </label>

                    <input
                        type="text"
                        id="studentId"
                        placeholder="Enter your student ID"
                        required
                         className="w-full border-2 border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <div  className="mb-6">
                    <label  className="block mb-2 font-medium text-gray-700">
                        <i  className="fas fa-lock"></i> Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        required
                         className="w-full border-2 border-indigo-100 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                     className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition"
                >
                    <i  className="fas fa-sign-in-alt"></i> Login to Dashboard
                </button>
            </form>
        </div>
    </div>

    {/* <!-- Footer --> */}
    <footer  className="bg-[#1a1a2e] text-white pt-16 pb-6">
        <div  className="max-w-7xl mx-auto px-5">

            <div  className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                <div>
                    <h3  className="text-2xl font-bold text-indigo-400 mb-4">
                        <i  className="fas fa-home"></i> HostelHub
                    </h3>

                    <p  className="text-gray-300">
                        Managing student hostels made simple and efficient.
                    </p>
                </div>

                <div>
                    <h4  className="text-xl font-semibold text-indigo-400 mb-4">
                        Services
                    </h4>

                    <ul  className="space-y-2 text-gray-300">
                        <li>Room Management</li>
                        <li>Mess Billing</li>
                        <li>Maintenance</li>
                    </ul>
                </div>

                <div>
                    <h4  className="text-xl font-semibold text-indigo-400 mb-4">
                        Support
                    </h4>

                    <ul  className="space-y-2 text-gray-300">
                        <li><i className="fas fa-phone"></i> +1 234 567 8900</li>
                        <li><i  className="fas fa-envelope"></i> support@hostelhub.com</li>
                        <li>Help Center</li>
                    </ul>
                </div>
            </div>

            <div  className="border-t border-gray-700 pt-6 text-center text-gray-400">
                <p>&copy; 2024 HostelHub. All rights reserved.</p>
            </div>
        </div>
    </footer>


    {/* <script> */}

        {/* // Mobile Menu
        function toggleMenu() {
            document.getElementById('mobileMenu').classList.toggle('hidden');
        }

        // Modal
        function openModal() {
            document.getElementById('loginModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('loginModal').classList.add('hidden');
        }

        // Alerts
        function showAlert(message) {
            alert(message);
        }

        // Login Form
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const studentId = document.getElementById('studentId').value;

            alert(`Welcome back, Student ${studentId}!`);

            document.getElementById('username').textContent = `Student ${studentId}`;

            closeModal();
        });

        // Close Modal on Outside Click
        window.onClick = function(event) {
            const modal = document.getElementById('loginModal');

            if (event.target === modal) {
                closeModal();
            }
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

    </script> */}
</div>
</div>
   </>
  );
}
