import { MailerService } from "$lib/services/mailer.service";
import { json } from "@sveltejs/kit";


export async function POST(event: any) {
  const data = await event.request.json();
  MailerService.sendMail('Newsletter: ' + data.email);
  return json({ success: true })
}