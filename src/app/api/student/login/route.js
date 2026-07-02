import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
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

if(!student){
    console.log("invalid")
    return NextResponse.json({
        msg:"invalid credentials"
    })
}

const passco = await bcrypt.compare(password,student.password)

  if(!passco){
    
    return NextResponse.json({msg:"Incorrect password"});
  }

//   const token = jwt.sign({
//         id: student.id,
//         email: student.email,
//     },
//         process.env.JWT_SECRET,
//         {
//             expiresIn: "7d",
//         }
//     );
  
  console.log("User found")
    return NextResponse.json({
        msg:"Login success",
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