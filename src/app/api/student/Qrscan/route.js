import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    const data = await req.json();
    console.log(data.data);
    const date = new Date();
    const Id = date.toISOString().slice(0,12);
    const QR = await prisma.attendanceqr.findUnique({
        where:{
            id : Id
        }
    })
    if(!QR){
       return NextResponse.json({msg:"Attendance QR not generated"},{status:401}); 
    }

    if(data.data == QR.token){
        return NextResponse.json({
            msg:`Attendance for ${new Date().toISOString().slice(0,10)} is granted`
        })
    }

    return NextResponse.json(QR.token);
}