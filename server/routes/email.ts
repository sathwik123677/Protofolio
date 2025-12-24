import { Request, Response } from "express";

interface EmailRequest {
  to: string;
  name: string;
  email: string;
  message: string;
}

export async function handleSendEmail(req: Request, res: Response) {
  try {
    const { to, name, email, message } = req.body as EmailRequest;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: name, email, message",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // TODO: Integrate with actual email service (SendGrid, Nodemailer, etc.)
    // For now, we'll just log the message and return success
    console.log("Contact Form Submission:", {
      timestamp: new Date().toISOString(),
      fromName: name,
      fromEmail: email,
      toEmail: to,
      message: message,
    });

    // In a real application, you would send the email here
    // Example with Nodemailer:
    // const transporter = nodemailer.createTransport({...});
    // await transporter.sendMail({
    //   from: email,
    //   to: to,
    //   subject: `New contact from ${name}`,
    //   text: message,
    // });

    return res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}
