import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type RequestBody = {
  image: string
  userId: string
  title: string
  text: string
}

export async function POST(request: NextRequest){
  const {image, userId, title, text}: RequestBody = await request.json();
  const post = await prisma.post.create({
     data: {
      image, 
      title,
      userId,
      text
     }
  })
  return NextResponse.json({msg: "Post realizado com sucesso"});
}