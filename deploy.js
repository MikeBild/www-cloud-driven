import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { config } from 'dotenv';
import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { DynamoStack } from './stacks/dynamo.js';
import { SESStack } from './stacks/ses.js';

config({ path: resolve(__dirname, '.env') });

const app = new App();
app.region = process.env.CDK_DEFAULT_REGION;
app.account = process.env.CDK_DEFAULT_ACCOUNT;

const { serverHandler, hostedZone } = new AWSAdapterStack(app, 'www-cloud-driven', { FQDN: process.env.FQDN });
new DynamoStack(app, 'www-cloud-driven-dynamo', { serverHandler });
new SESStack(app, 'www-cloud-driven-ses', {
	serverHandler,
	hostedZone,
	FQDN: process.env.FQDN,
	SES_EMAIL_FROM: process.env.SES_EMAIL_FROM,
	SES_EMAIL_TO: process.env.SES_EMAIL_TO
});
