import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

type Member = {
  id: string
  name: string
  profession: string
  location: string
  email: string
  linkedin: string
  image: string
}


const prisma = new PrismaClient()

export async function GET(req: NextRequest){
  try {
    const allMembers =  await prisma.member.findMany();
  
      return NextResponse.json(allMembers)

    } catch (error) {
    return NextResponse.json({msg: error}, {status: 500})
  }

}
export  async function POST(req: NextRequest){
  try {
    const {name, profession, location, email, linkedin, image}: Member = await req.json();
  
    const user = prisma.member.create({
      data: {
        name,
        profession,
        location,
        email,
        linkedin,
        image
      }
    }
    )
  
    return NextResponse.json({msg: "Usuario cadastrado", userId: (await user).id});
  } catch (error) {
    return NextResponse.json({msg: error}, {status: 500})
  }
}

export async function PUT(req: NextRequest, res: NextResponse) {
  try {
    const { id, ...updateFields }: Member = await req.json();

    await prisma.member.update({
      where: { id }, 
      data: updateFields, 
    });

    return NextResponse.json({ msg: "Usuario editado com sucesso", userId: id });
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest){
  try {

    const id = req.nextUrl.searchParams.get("id");
  
    if (!id) {
      throw new Error("ID not provided in URL");
    }
    const deleteMember = await prisma.member.delete({
      where: {
        id: id
      },
    });
  
    return NextResponse.json({msg: "Membro apagado com sucesso", id: deleteMember});
  } catch (error) {
    return NextResponse.json({msg: error}, {status: 500});
  }
}

