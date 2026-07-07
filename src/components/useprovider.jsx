"use client";

import { useEffect, useState } from "react";

const [user,setuser] = useState("");

useEffect(()=>{
    async function getUser() {
        const response = await fetch("/api/student/profle");

        if(response.ok){
            const data = await response.json();
            setuser(data.student);
        }
    }
    getUser();
},[]);

