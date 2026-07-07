import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getcurruser } from "@/lib/auth";
import { unauthorized } from "next/navigation";

export async function POST(req) {
    try{ const formData = await req.formData();
        const field1 = formData.get("field1");
        const field2 = formData.get("field2");
        const field3 = formData.get("field3");
       
        const student = await getcurruser();

        if(!student){
            return NextResponse.json({unauthorized},
                {status:401}
            );
        }

        const date = new Date().toString();
        
       const complain = await prisma.Garbage.create({
            data:{
                id: date,
                Garbage_type: field1,
                Description: field2,
                Location: field3,
            }
       })
       console.log("user created");
        return NextResponse.json({
            msg: "Complaint sent",
            student : student
        })
    }catch(error){
        console.log(error)
        return NextResponse.json("error")
    }

}