
import { NextResponse } from "next/server";

export async function getUser() {
         const response = await fetch("/api/student/profile", {
            credentials: "include",
        method: "GET",
    })
    const data = await response.json();
    if (!response.ok || !data.session) {
    return null;
}
    console.log(data);
    const student = data.session.session.student;
    // if(response.ok){
    //  console.log(student)
        return student;
    // }
      
      }