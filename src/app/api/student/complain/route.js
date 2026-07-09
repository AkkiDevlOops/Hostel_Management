import { getcurruser } from "@/lib/auth";
import { getUser } from "@/lib/getuser";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST() {
    try {
     const data = await getcurruser();
     console.log(data);
     const id = data.id

    //  const garbage = await prisma.garbage.findMany();
    //  return NextResponse.json(garbage);
   
        if(id){
        const Garbage = await prisma.Garbage.findMany({
            where:{
                name : id,
            }
        })

         return NextResponse.json(Garbage);
    }
 
//         if (Garbage.length === 0) {
//     return NextResponse.json({
//         Garbage: [],
//         msg : "You have not made any complaints"
//     });
// }

  

//     return NextResponse.json({Garbage: Garbage,
//         msg: "Complaints fetched Successfully"
//     })
     } catch (error) {
  console.error(error);
  return NextResponse.json(
    {
      error: error.message,
      stack: error.stack,
    },
    { status: 500 }
  );
}
   }
