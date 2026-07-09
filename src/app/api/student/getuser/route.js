import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getcurruser } from "@/lib/auth";
import { cookies } from "next/headers";

export async function GET() {
    try {
         const user = await getcurruser();
        console.log (user)
         if(!user){
            return NextResponse.json("user not found ")
         }
    
    return NextResponse.json(user);
    } catch (error) {
       console.log(error)
       return NextResponse.json(error) 
    }
}





 