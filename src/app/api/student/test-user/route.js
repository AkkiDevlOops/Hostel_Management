import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// export async function GET() {
//   const user = await prisma.Student.create({
//     data: {
//       name: "Demo User",
//       email: "demo@example.com",
//     },
//   });

//   return NextResponse.json(user);
//   console.log("userv crested")
// }

export async function GET(res) {
  return NextResponse.json("hello")
  console.log("working"); 
}