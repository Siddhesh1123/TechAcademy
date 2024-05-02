import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { email, message,name } = await req.json();
    
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: process.env.SMTP_SERVER,
            port: 25,
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USERNAME,
            to: 'wayalsiddhesh121@gmail.com',
            subject: 'Email from Tech Academy',
            html: `
                <h2>Hello ${name}</h2>
                <li>Email: ${email}</li>
                <li>Message: ${message}</li>
            `,
        };

        await transporter.sendMail(mailOptions);

        // Send success response
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (err) {
        // Send error response
        return NextResponse.json({ message: 'Email sent failed', err }, { status: 500 });
    }
}
