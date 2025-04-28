import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { PASSWORD_MAILER } from "@/utils/constants";

const transport = nodemailer.createTransport({
  host: "mail.maputofrontenders.dev",
  port: 465,
  secure: true,
  auth: {
    user: "notifications@maputofrontenders.dev",
    pass: PASSWORD_MAILER,
  },
} as SMTPTransport.Options);

type SendEmailDto = {
  sender: Mail.Address;
  receipients: Mail.Address[];
  subject: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
  const { sender, message, receipients, subject } = dto;
  return await transport.sendMail({
    from: sender,
    to: receipients,
    subject,
    html: `${message}</br></br>Esta mensagem foi gerada pelo site <a href="https://maputofrontenders.dev/">maputofrontenders.dev</a></br>`,
  });
};
