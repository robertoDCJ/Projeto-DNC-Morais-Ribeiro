import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

    try {
        const data = await req.json();

        await prisma.contact.create({
        data: {
            name: data.name as string,
            email: data.email as string,
            subject: data.subject as string,
            message: data.message as string,
            phone: data.phone as string,
            howFound: data.howFound as string,
            otherText: data.otherText as string,
            processNumber: data.processNumber as string,
        },
      });
  
      return NextResponse.json({ msg: "Informação salva no db com sucesso!"});
    } catch (error: any) {
      return NextResponse.json(
        {
          msg: "Erro ao salvar informação no db!",
          error: error.message,
        },
        { status: 500 }
      );
    }
  }

