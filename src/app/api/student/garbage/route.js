import { getcurruser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req) {
    try{ 
    

        const formData = await req.formData();
        const field1 = formData.get("field1");
        const field2 = formData.get("field2");
        const field3 = formData.get("field3");
       

        const data = await getcurruser();
        const id = await data.id;

        console.log("get user call"+id); 
        
       
        const date = new Date().toString();
        
       const complain = await prisma.Garbage.create({
            data:{
                id: date,
                Garbage_type: field1,
                Description: field2,
                Location: field3,
                name : id,
            }
       })

       if(!complain){
        return NextResponse("complain was not send due to wrong data")
       }
       

       console.log("user created");
        return NextResponse.json({
            msg: "Complaint sent",
            data: complain.id
        })

    }catch(error){
        console.log(error)
        return NextResponse.json("error")
    }

 }