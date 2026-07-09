import { NextResponse } from "next/server";
export async function getUser() {
    const cookieStore = await cookies();


         const response = await fetch("http://localhost:3000/api/student/getuser", {
            credentials: "include",
        method: "GET",
    })
    const data = await response.json();
//     if (!response.ok || !data.session) {
//     return null;
// }


    console.log(data);
    return data;
    const student = data.student;
    const session = data.session;
    // if(response.ok){
    //  console.log(student)
        return student;
    // }
      
      }