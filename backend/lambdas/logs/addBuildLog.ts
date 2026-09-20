/**
 * AWS Lambda Handler: Add Build Log Entry
 * API Gateway Event: POST /api/problems/{id}/logs
 * 
 * AWS Services Used:
 * - AWS Lambda
 * - AWS DynamoDB (PutCommand into ProofLoopData with SK="LOG#<timestamp>#<id>")
 * - AWS S3 (Attachment URL from S3 bucket)
 */

import { db } from '../../db/dynamoTable';
import { BuildLog } from '../../../src/types';

export const handler = async (event: any) => {
  try {
    const problemId = event.pathParameters?.id || event.id;
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

    if (!problemId || !body.builderId || !body.text) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Missing problemId, builderId, or text content' }),
      };
    }

    const logEntry: BuildLog = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      problemId,
      builderId: body.builderId,
      builderName: body.builderName || 'Student Builder',
      text: body.text,
      imageUrl: body.imageUrl || undefined,
      createdAt: new Date().toISOString(),
    };

    const saved = db.addBuildLog(logEntry);

    return {
      statusCode: 201,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(saved),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: error.message || 'Internal Server Error' }),
    };
  }
};
