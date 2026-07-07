import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
    const data = await req.json();
    const {studentId} = data;
    const user = await prisma.session.findUnique({
        where : {
            studentId : studentId,
        },
        include:{
            student : true, 
        }
    })
    console.log(user.student);
    return NextResponse.json({
        msg : "Data fetched",
        user : user.student})
}catch(err){
    console.log(err);
    return NextResponse.json({
        msg: err
    })
}
}