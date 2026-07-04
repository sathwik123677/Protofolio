import nodemailer from "nodemailer";

export async function handleSendEmail(req, res) {
  try {
    const { to, name, email, message } = req.body;

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

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailFrom = process.env.MAIL_FROM;

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailFrom) {
      console.warn("⚠️ SMTP configuration is missing. Running in development mock mode.");
      console.log("📨 Contact Form Submission (Mocked):", {
        timestamp: new Date().toISOString(),
        fromName: name,
        fromEmail: email,
        toEmail: to,
        message,
      });
      return res.json({
        success: true,
        message: "Message received! (SMTP configuration missing, logged to console)",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: message,
      html: `<p>${message.replace(/\n/g, "<br />")}</p><p><strong>From:</strong> ${name} (${email})</p>`,
    });

    console.log("Contact Form Submission:", {
      timestamp: new Date().toISOString(),
      fromName: name,
      fromEmail: email,
      toEmail: to,
      message,
    });

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
