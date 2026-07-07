import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("sessionId")?.value;

    const value = sessionId;    

    const session = await prisma.session.findUnique({
        where:{
            id: value,
        },
        include : {
    student : true,
  }
    });

    const sid = session.studentId;

    const student = await prisma.student.findUnique({
        where:{
            id : sid,
        }
    })
     
    

    if(!session){
        return NextResponse.json({msg: "Unauthorized"},{
            status:"401"
        }
        )
    }
    

    return NextResponse.json({ message: "Welcome!",
        session : session,
        student : student,
     });


}
