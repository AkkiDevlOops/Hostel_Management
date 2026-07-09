import { getcurruser } from "@/lib/auth";
import { getUser } from "@/lib/getuser";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(params) {
  const data = await getcurruser();
  console.log(data);
  const id = data.id
  return NextResponse.json(id)

}