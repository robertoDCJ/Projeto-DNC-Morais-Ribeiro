import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import path from 'path';
import { writeFile } from 'fs/promises';

const prisma = new PrismaClient();

type RequestBody = {
  image: string
  userId: string
  title: string
  text: string
}

export async function POST(request: NextRequest){
  try {
    const data  = await request.formData();
    const authorId = data.get("authorId");
    const file = data.get("image")
    const datePublication = data.get("datePublication");
    const title = data.get("title");
    const text = data.get("text");


    if (!file || !(file instanceof File)) {
      throw new Error("Nenhum arquivo escolhido!");
    }


    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(
      process.cwd(),   "public/uploadsArtigos",   `${file.lastModified.toString()}_${file.name}`
    );
    writeFile(filePath, buffer);

    const image = `/uploadsArtigos/${file.lastModified.toString()}_${file.name}`;


    await prisma.post.create({
       data: {
        image: image as string,
        authorId: authorId as string,
        datePublication: datePublication as string,
        title: title as string,
        text: text as string,
       }
    })


    return NextResponse.json({msg: "Post realizado com sucesso"});
    
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500})
  }
}

export async function GET(request: NextRequest){
  try {
    const id = request.nextUrl.searchParams.get("postId");
  
    if(typeof(id) === 'string'){
      const post = await prisma.post.findFirst({where: {
        id: id
      }})
  
      return NextResponse.json(post);
    }
  
    const posts = await prisma.post.findMany();
  
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500})
  }
}

export async function DELETE(request: NextRequest){
  try {
    const id = request.nextUrl.searchParams.get("postId");
  
    if(id){
      const post = await prisma.post.delete({where: {
        id
      }})
      return NextResponse.json({status: 200});
    }
    return NextResponse.json({error: "id é necessario"}, {status: 400})
  
  } catch (error) {
    return NextResponse.json({error: error}, {status: 500})
  }
}