import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  //mail credential
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const first = process.env.NEXT_PUBLIC_EMAIL_FIRST;
  const second = process.env.NEXT_PUBLIC_EMAIL_SECOND ?? ''

  //request data
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'mail.infomaniak.com',
    port: 465,
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      to: first,
      subject: `${name} - somihaiti.org`,
      html: `
            <h1 style="text-align : center">Formulaire de contact</h1>
            <h2>Nom : ${name}</h2>
            <h3>Mail : ${email}</h3>
            <p>Numéro de téléphone : ${phone}</p>
            <p>${message}</p>
            `,
    });

    if(second.length > 3){
      const mail = await transporter.sendMail({
        from: username,
        to: second,
        subject: `${name} - somihaiti.org`,
        html: `
            <h1 style="text-align : center">Formulaire de contact</h1>
            <h2>Nom : ${name}</h2>
            <h3>Mail : ${email}</h3>
            <p>Numéro de téléphone : ${phone}</p>
            <p>${message}</p>
            `,
      });
    }

    return NextResponse.json({ message: 'Success: email was sent' });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: 'COULD NOT SEND MESSAGE' });
  }
}