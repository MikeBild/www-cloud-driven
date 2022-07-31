import AWS from 'aws-sdk';
import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

interface Contact {
	company: string;
	email: string;
	message: string;
	firstname: string;
	lastname: string;
}

export async function GET() {
	return {
		status: 200,
		body: {}
	};
}

export async function POST({ request }: RequestEvent) {
	const { company, email, message, firstname, lastname } = Object.fromEntries(await request.formData());
	const contact: Contact = { company, email, message, firstname, lastname } as Contact;

	const ses = new AWS.SES({ region: env.AWS_DEFAULT_REGION });
	await ses.sendEmail(sendEmailParams(contact)).promise();

	const endpoint = new URL(request.headers.get('origin') || '');
	endpoint.searchParams.append('success', 'true');

	return {
		headers: { Location: endpoint.toString() },
		status: 302
	};
}

function sendEmailParams(contact: Contact) {
	return {
		Destination: {
			ToAddresses: [env.SES_EMAIL_TO || process.env.SES_EMAIL_TO || '']
		},
		Message: {
			Body: {
				Html: {
					Charset: 'UTF-8',
					Data: getHtmlContent(contact)
				},
				Text: {
					Charset: 'UTF-8',
					Data: getTextContent(contact)
				}
			},
			Subject: {
				Charset: 'UTF-8',
				Data: `News from cloud-driven.dev`
			}
		},
		Source: env.SES_EMAIL_FROM || process.env.SES_EMAIL_FROM || ''
	};
}

function getHtmlContent({ company, email, message, firstname, lastname }: Contact) {
	return `
	  <html>
		<body>
		  <h1>Received an Email. 📬</h1>
		  <h2>Sent from: </h2>
		  <ul>
			<li style="font-size:18px">👤 <b>${firstname} ${lastname} // ${company}</b></li>
			<li style="font-size:18px">✉️ <b>${email}</b></li>
		  </ul>
		  <p style="font-size:18px">${message}</p>
		</body>
	  </html>
	`;
}

function getTextContent({ company, email, message, firstname, lastname }: Contact) {
	return `
	  Received an Email. 📬
	  Sent from:
		  👤 ${firstname} ${lastname} // ${company}
		  ✉️ ${email}
	  ${message}
	`;
}
