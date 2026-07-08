import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
    const cookieStore = await cookies()
    const session = cookieStore.get("sessionId")

    let student;
    
    if(!session){
    return NextResponse.json("No complaints Found");
    }

    const value = session.value
        student = await prisma.session.findUnique({
            where : {
                id : value,
            }
        })

        if(!student){
            return NextResponse.json("Session was not found Login first");
        }

        const Garbage = await prisma.Garbage.findMany({
            where:{
                name : student.studentId,
            }
        })
        if(!Garbage){
            return NextResponse.json("You have not made any complaints")
        }
    return NextResponse.json({Garbage: Garbage,
        msg: "Complaints fetched Successfully"
    })
     } catch (error) {
     return NextResponse.json( { message: "Session cookie not found" },
    { status: 401 })    
    }
}