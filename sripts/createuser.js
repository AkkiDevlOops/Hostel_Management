import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";
 
export async function GET(){
   return NextResponse.json("Hello")

}

async function main() {
   

const user = await prisma.Student.create({
   data : {
      name:"Rahul",
      email:"rahul@gmail.com"

   }
});

console.log(user);
main()
  .catch(console.error)
  
  
}
