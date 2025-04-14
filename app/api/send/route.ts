import { sendEmail } from "@/lib/mail";

export async function POST(req: Request) {
  const formData = await req.json();
  const sender = {
    name: "Maputo Frontenders Notifications",
    address: "notifications@maputofrontenders.dev",
  };

  const receipients = [
    {
      name: "Maputo Frontenders",
      address: "contacto@maputofrontenders.dev",
    },
  ];

  try {
    const result = await sendEmail({
      sender,
      receipients,

      subject: "Nova Mensagem do site da Maputo Frontenders",
      message: `Nome Completo: ${formData.name}</br>

      Email: ${formData.email}</br></br>
      
      Mensagem: ${formData.message}
      `,
    });
    return Response.json({ body: formData });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
