import AWS from 'aws-sdk';
import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function POST({ request }: RequestEvent) {
	const { email, firstname } = Object.fromEntries(await request.formData());

	const ddb = new AWS.DynamoDB({ region: env.AWS_DEFAULT_REGION });
	await ddb
		.putItem({
			TableName: env.DBTABLE || process.env.DBTABLE || '',
			Item: AWS.DynamoDB.Converter.marshall({ id: email, type: 'newsletter', firstname })
		})
		.promise();

	return {
		status: 201,
		body: { email, firstname }
	};
}
