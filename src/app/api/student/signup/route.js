import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"



export async function POST(req) {
  try{
  const data = await req.json();
  const {Enrollment,name,email,password} = data;
  const pass = await bcrypt.hash(password,10);
  
  
 try {
  const user = await prisma.Student.create({
    data: {
      name: data.name,
      email: data.email,
      Enrollment: data.Enrollment,
      password: pass,
    },
  });

  console.log("user saved success");
  console.log(user);

  return NextResponse.json({
  success: true,
  msg: "User created",
});


} catch (error) {
  console.log("PRISMA ERROR:");
  console.log(error);

  return NextResponse.json(
    { msg: error.message },
    { status: 500 }
  );
}
  
  
}
  catch(err){
    console.log(err);
    return NextResponse.json({
      msg:err
    })
  }

}