import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getUser } from "@/lib/getuser";

export async function POST() {
    try {
         const data = await getUser();
    console.log(data);
    return NextResponse.json({data})
    } catch (error) {
       console.log(error) 
    }

  
}





 