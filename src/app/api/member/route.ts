import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { writeFile, unlink } from "fs/promises";
import path from "path";


const prisma = new PrismaClient();

export async function GET() {
  try {
    const allMembers = await prisma.member.findMany();

    return NextResponse.json(allMembers);
  } catch (error) {
    return NextResponse.json({ 
    msg: error, 
    status: 500,
    error: error });
  }
}
export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get("image");
    if (!file || !(file instanceof File)) {
      throw new Error("No se adjuntó ningún archivo");
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(process.cwd(), "public/uploads", file.name);
    writeFile(filePath, buffer);
    const id = data.get("id");
    const name = data.get("name");
    const profession = data.get("profession");
    const location = data.get("location");
    const email = data.get("email");
    const linkedin = data.get("linkedin");
    const image = `/uploads/${file.name}`;

    await prisma.member.create({
      data: {
        name: name as string,
        profession: profession as string,
        location: location as string,
        email: email as string,
        linkedin: linkedin as string,
        image: image as string,
      },
    });

    return NextResponse.json({ msg: "Membro adicionado com sucesso!", id: id });
  } catch (error) {
    return NextResponse.json({
      msg: "Erro ao adicionar o membro",
      status: 500,
      error: error
    });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const data = await req.formData();
    const file = data.get("image");
    if (!file || !(file instanceof File)){
      throw new Error("No se adjuntó ningún archivo");
    }
    const id = data.get("id")?.toString();
    const name = data.get("name");
    const profession = data.get("profession");
    const location = data.get("location");
    const email = data.get("email");
    const linkedin = data.get("linkedin");
    const image = `/uploads/${file.name}`;
    const lastImage = data.get("lastImage");

    if (image !== lastImage){
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filePath = path.join(process.cwd(), "public/uploads", file.name);
      writeFile(filePath, buffer);

      await unlink(`public${lastImage}`);

    }
      await prisma.member.update({
      where: { id },
      data: {
        name: name as string,
        profession: profession as string,
        location: location as string,
        email: email as string,
        linkedin: linkedin as string,
        image: image as string,
        
      }
    });
    
    return NextResponse.json({ msg: "Membro atualizado com sucesso!", id: id });
    }catch (error) {
      return NextResponse.json({
        msg: "Erro ao atualizar o membro", 
        status: 500,
        error: error });
    }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const filePath = req.nextUrl.searchParams.get("filePath");
    if (!id || !filePath) {
      throw new Error("ID not provided in URL");
    }
    await unlink(`public${filePath}`);

    await prisma.member.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ msg: "Membro apagado com sucesso!", id: id });
  } catch (error) {
    return NextResponse.json({
    msg: "Erro ao apagar membro!",
    status: 500,
    error: error});
  }
}