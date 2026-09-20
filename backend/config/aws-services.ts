/**
 * ProofLoop - AWS Services Client Configuration
 * 
 * AWS Ship It Track Integration:
 * 1. AWS DynamoDB: Used as the primary NoSQL single-table database storing Users, Problems, BuildLogs, and Proofs.
 * 2. Amazon Cognito: Handles user authentication, OAuth tokens, and role-based access control (poster vs builder).
 * 3. AWS S3: Stores image attachments, screenshots, and proof videos with Pre-Signed Upload URLs.
 * 4. AWS Lambda & API Gateway: Serverless Node.js backend executing API handlers.
 * 5. AWS EventBridge + SNS/SES: Asynchronous notification bus triggering email/alerts upon proof submission & validation.
 */

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';
import { S3Client } from '@aws-sdk/client-s3';

const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

// AWS DynamoDB Client
const rawDbClient = new DynamoDBClient({ region: AWS_REGION });
export const dynamoDocClient = DynamoDBDocumentClient.from(rawDbClient, {
  marshallOptions: {
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  },
});

// Amazon Cognito Client
export const cognitoClient = new CognitoIdentityProviderClient({ region: AWS_REGION });

// AWS S3 Client for Media & Uploads
export const s3Client = new S3Client({ region: AWS_REGION });

export const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || 'ProofLoopData';
export const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || 'proofloop-media-uploads';
