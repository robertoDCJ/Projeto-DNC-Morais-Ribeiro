import { Resend } from "resend";
import { EmailTemplate } from "@/components/Email-Template/Email-Template";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["juanuseche47@gmail.com"],
      subject: data.subject,
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        phone: data.phone,
        howFound: data.howFound,
        otherText: data.otherText,
        processNumber: data.processNumber,
      }),
      text: "",
    });

    return NextResponse.json(
      { msg: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Erro ao enviar o email",
        error: error,
      },
      { status: 500 }
    );
  }
}


