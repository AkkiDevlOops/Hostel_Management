import { getcurruser } from "@/lib/auth";
import { getUser } from "@/lib/getuser";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST() {
    try {
     const data = await getcurruser();
     console.log(data);
     const id = data.id
    

        const Garbage = await prisma.Garbage.findMany({
            where:{
                name : id,
            }
        })
        if (Garbage.length === 0) {
    return NextResponse.json({
        Garbage: [],
        msg : "You have not made any complaints"
    });
}
    return NextResponse.json({Garbage: Garbage,
        msg: "Complaints fetched Successfully"
    })
     } catch (error) {
    //  return NextResponse.json( { message: "Session cookie not found" },
    // { status: 401 })    
     return NextResponse.json( { message: "Session cookie not found" },
    { status: 401 })    
    }
}
