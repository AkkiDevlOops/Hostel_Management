import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    try {
    const cookieStore = await cookies()
    const session = cookieStore.get("sessionId")

    let student;
    
    if (!session) {
    return NextResponse.json({
        Garbage: [],
        msg: "No session found"
    });
}

    const value = session.value
        student = await prisma.session.findUnique({
            where : {
                id : value,
            }
        })

        if (!student) {
    return NextResponse.json({
        Garbage: [],
        msg: "Session not found. Login first."
    });
}

        const Garbage = await prisma.Garbage.findMany({
            where:{
                name : student.studentId,
            }
        })
        if (Garbage.length === 0) {
    return NextResponse.json({
        Garbage: [],
        msg: "You have not made any complaints"
    });
}
    return NextResponse.json({Garbage: Garbage,
        msg: "Complaints fetched Successfully"
    })
     } catch (error) {
     return NextResponse.json( { message: "Session cookie not found" },
    { status: 401 })    
    }
}
