import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { App } from '@aws-cdk/core';

const app = new App();
app.region = process.env.CDK_DEFAULT_REGION;
app.account = process.env.CDK_DEFAULT_ACCOUNT;

const { serverHandler } = new AWSAdapterStack(app, 'www-cloud-driven', {
	FQDN: 'cloud-driven.mikebild.com'
});


