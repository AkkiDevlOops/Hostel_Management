import { NextResponse } from "next/server";

export async function getUser() {
         const response = await fetch("/api/student/profile", {
        method: "GET",
    })
    const data = await response.json();

        return(data);
    
      
      }