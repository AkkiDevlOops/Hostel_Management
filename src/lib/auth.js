import prisma from "./prisma";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function getcurruser() {

const cookieStore = await cookies();

const sessionId = cookieStore.get("sessionId")?.value;
console.log(`session id at auth.js ${sessionId}`)

if(!sessionId){
     return null
    }

const session = await prisma.Session.findUnique({
    where : {
        id : sessionId,
    },

})

const sid = session.studentId
console.log(sid)

if(!session){
    return  null;
}

// if(session.expiresAt < new Date()){
//     return null;                                                                                                                                                                                                                
// }

const student = await prisma.student.findUnique({
    where:{
        id : sid,
    }
})

console.log(student)

return student;
}