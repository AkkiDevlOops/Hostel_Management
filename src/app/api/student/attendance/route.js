import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST() {

    try{
const expiresAt = new Date(Date.now() + 24*60*60*1000);
const date = new Date().toISOString();
const opt = new Date();
const dateid = date.slice(0,12);

const token = jwt.sign({
        date: date,
   },
process.env.JWT_SECRET,
{
expiresIn: '24h',
// jwtid: crypto.randomUUID(), // unique token ID, helps prevent replay/reuse
//     notBefore: "0s",
}
);

const existing = await prisma.attendanceqr.findUnique({
    where:{
        id: dateid
    }
})

if(existing){
    await prisma.attendanceqr.update({
        where:{
             id : existing.id
        },
        data:{
             token : token,
        }
        })
    }else{
        const user = await prisma.attendanceqr.create({
    data:{
    id : dateid,
    token : token,
    expiresAt : expiresAt
    }
});
    }
    
const qrtoken = await prisma.attendanceqr.findUnique({
    where:{ 
        id :dateid
    },
})

const res = qrtoken.token;

return NextResponse.json({res,

});


}








   
// const createqr = await prisma.attendanceqr.create({
//     id: 1,
//     data:{
//         token: token,
//         expiresAt: expiresAt,
//     },
    
// })



    catch(err){
        console.log(err);
         return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
    }
}