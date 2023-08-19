import { config } from '$lib/config';
import { mailConfig } from '$lib/mail-config';
import { createTransport } from 'nodemailer';

class MailerService {

  static async sendMail(content: string) {
    const transporter = createTransport({
      host: mailConfig.smtp.host,
      port: mailConfig.smtp.port,
      secure: false,
      auth: {
        user: mailConfig.smtp.user,
        pass: mailConfig.smtp.pass
      }
    });
    await transporter.sendMail({
      from: 'noreply@maciejkubus.usermd.net',
      to: "maciekkubus@gmail.com",
      subject: "Wiadomość z " + config.siteName, 
      text: content, 
    });
  }
}

export { MailerService };

