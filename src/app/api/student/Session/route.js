import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getcurruser } from "@/lib/auth";

export default function POST(){
    try{
 const student = getcurruser();
 return NextResponse({student})
    }catch{
        console.log(error);
    }
}