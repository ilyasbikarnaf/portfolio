"use server";
import nodemailer from "nodemailer";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  try {
    const { name, email, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your email
        pass: process.env.GMAIL_PASS, // your 16-char app password
      },
    });

    await transporter.sendMail({
      from: email, // ✅ sender address
      to: "ilyas.bikarnaf@gmail.com", // ✅ list of receivers (comma-separated string or array)
      replyTo: email,
      subject: `Form message from ${name}`, // ✅ Subject line
      text: message, // ✅ Plain text body
    });

    return { message: "Message sent succesfully", success: true };
  } catch (err) {
    return { success: false, message: "An error occured" };
  }
}
