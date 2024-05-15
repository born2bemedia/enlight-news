import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const { name, email, newsTopic, sources, additionalComments } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply@enlight.news", // Your Gmail email
        pass: "qjm289ZbQQ346bQ=rfd", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    const mailOptions = {
      from: '"Enlight News" <noreply@enlight.news>', // Sender address
      to: "noreply@enlight.news", // Change to your recipient's email
      subject: "New topic",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nProject Description: ${projectDescription}\nCurrent Challenges: ${currentChallenges}\n`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    const htmlEmail = `
  <html>
    <body>
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-family: sans-serif">
        <thead>
          <tr>
            <td>
              <img style="width: 100%" src="https://enlight.news/images/email-head.png" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 40px">
              <h2 style="text-align: left; font-size: 20px">Dear ${name},</h2>
              <p style="text-align: left; font-size: 16px">
              Thank you for subscribing to Enlight News!<br><br>
              You're now part of our community, and we're excited to have you on board. Shortly, you'll receive our first email, highlighting the top crypto news and the latest updates from the blockchain world.<br><br>
              Stay tuned for informative and insightful content delivered straight to your inbox!

              </p>
              
              <h2 style="text-align: left; font-size: 16px">
                  Best regards,<br />
                  Enlight News Team
              </h2>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style="padding: 24px; background-color: #0E0E0E; color: #FFFFFF; font-size: 20px; text-align: center;">
              Thanks for using
              <a href="https://enlight.news/" style="text-decoration: none; color: #97D80F; font-size: 20px;">Enlight.news</a>
            </td>
          </tr>
        </tfoot>
      </table>
    </body>
  </html>
  `;

    const mailOptionsUser = {
      from: '"Enlight News" <noreply@enlight.news>', // Sender address
      to: email, // Change to your recipient's email
      subject: "Getting Started Request Received",
      html: htmlEmail,
    };

    //await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
