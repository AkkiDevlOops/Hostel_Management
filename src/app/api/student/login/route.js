import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Crypto from "crypto-js";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"



export async function POST(req) {
  try{
  const data = await req.json();
  const {email,password} = data;
  const student = await prisma.student.findUnique({
  where: {
    email: email,
  },
});



const expire = new Date(Date.now() + 24*60*60*1000);



if(!student){
    console.log("invalid")
    return NextResponse.json({
        msg:"invalid credentials"
    })
}

const sid = student.id;

const passco = await bcrypt.compare(password,student.password)

  if(!passco){
    
    return NextResponse.json({msg:"Incorrect password"});
  }

const alreadysession = await prisma.Session.findUnique({
  where : {
    studentId : sid,
  },
  include : {
    student : true,
  }
})


const sessionId = crypto.randomUUID();

if(!alreadysession){
await prisma.Session.create({
  data : {
    id : sessionId,
    studentId : student.id,
    expiresAt : expire,
  }
})


const cookieStore = await cookies();

    cookieStore.set("sessionId",sessionId,{
      httpOnly : true,
      secure : process.env.NODE_ENV === "production",
      sameSite : "lax",
      path: "/",
      maxAge : 24*60*60,
    })
    console.log("cookie created");
  }
  

  console.log("User found")
    return NextResponse.json({
        msg:"Login success",
        sid : sid,
       // token,
    })
}
  catch(err){
    console.log(err);
    console.log("user not found")
    return NextResponse.json({
        error:"internal server error"
    },
    {status:"400"})

  }

}