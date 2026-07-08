import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try{
    const cookieStore = await cookies();
    console.log(cookieStore.getAll());

const sessionId = cookieStore.get("sessionId");
    // const sessionId = cookieStore.get("sessionId");

    // console.log(sessionId);

    if(!sessionId){
        return NextResponse.json({msg: "SessionId not found"})
    }

    
    const value = sessionId?.value;    

    const session = await prisma.session.findUnique({
        where:{
            id: value,
        },
        include : {
    student : true,
  }
    }).catch(()=>console.log(err))

    const data = {session}
    // console.log(data.session.student.id)

    if(!session){
        console.log("Unauthorized")
        return NextResponse.json({msg: "Unauthorized"},{
            status:"401"
        }
        )
    }

    const sid = data.session.student.id;
    

    const student = await prisma.student.findUnique({
        where:{
            id : sid,
        }
    })

    

    if(!student){
        console.log("student with this session not found")
        return NextResponse.json({msg:"student with this session not found"});
    }
     
    return NextResponse.json({ message: "Welcome!",
        session : data,
        student : student,
     });
    }catch(err){
        console.log(err);
        return NextResponse.json(err);
    }


}
