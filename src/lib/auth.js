import { cookies } from "next/headers";
import prisma from "./prisma";


export async function getcurruser() {

const cookieStore = await cookies();

const sessionId = cookieStore.get("session")?.value;

if(!sessionId){ return null;}

const session = await prisma.Session.findUnique({
    where : {
        id : sessionId,
    },

})

if(!session){
    return  null;
}

if(session.expiresAt < new Date()){
    return null;
}

const student = await prisma.student.findUnique({
    where:{
        studentId : session.studentId
    }
})

return student;
}