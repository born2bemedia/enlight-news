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
        user: "noreply@enlight.systems", // Your Gmail email
        pass: "jem5uqk_RMZ@muk!udv", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false, // This bypasses the certificate validation
      },
    });

    const mailOptions = {
      from: '"Enlight News" <noreply@enlight.systems>', // Sender address
      to: "noreply@enlight.systems", // Change to your recipient's email
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
              <img style="width: 100%" src="https://enlight.systems/images/email-head.png" />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 40px">
              <h2 style="text-align: left; font-size: 20px">Dear ${name},</h2>
              <p style="text-align: left; font-size: 16px">
                 Thank you for reaching out to us! We have received your request to get started with Enlight, and we're thrilled to assist you. Our team is currently reviewing your request, and we'll be in touch with you shortly to discuss the next steps and get you started with our services.<br><br>

                  If you have any urgent questions or concerns, please feel free to contact us at <a href="mailto:info@enlight.systems">info@enlight.systems</a>.<br><br>

                  We appreciate your interest in Enlight, and we look forward to working with you!
              </p>
              
              <h2 style="text-align: left; font-size: 16px">
                  Best regards,<br />
                  Enlight Team
              </h2>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td style="padding: 24px; background-color: #0E0E0E; color: #FFFFFF; font-size: 20px; text-align: center;">
              Thanks for using
              <a href="https://Enlight.systems" style="text-decoration: none; color: #97D80F; font-size: 20px;">Enlight.systems</a>
            </td>
          </tr>
        </tfoot>
      </table>
    </body>
  </html>
  `;

    const mailOptionsUser = {
      from: '"Enlight News" <noreply@enlight.systems>', // Sender address
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
