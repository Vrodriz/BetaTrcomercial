import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, number, email, pedido } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vrfern0ndes@gmail.com', 
      subject: 'Novo contato recebido',
      text: `Nome: ${name}\nNúmero: ${number}\nEmail: ${email}\nPedido: ${pedido}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Formulário enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao enviar o formulário' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
