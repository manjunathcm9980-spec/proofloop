/**
 * AWS Lambda Handler: Validate / Review Proof
 * API Gateway Event: POST /api/proofs/{id}/validate
 * 
 * AWS Services Used:
 * - AWS Lambda
 * - AWS DynamoDB (UpdateCommand setting proof status to 'validated'/'rejected' and updating problem status to 'solved')
 * - AWS EventBridge / SNS (Fires notification to Builder when validated)
 */

import { db } from '../../db/dynamoTable';

export const handler = async (event: any) => {
  try {
    const proofId = event.pathParameters?.id || event.id;
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

    if (!proofId || !body.status) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Missing proofId or status' }),
      };
    }

    if (!['validated', 'rejected'].includes(body.status)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Invalid status value. Allowed: validated, rejected' }),
      };
    }

    const updated = db.validateProof(proofId, body.status, body.posterComment);

    if (!updated) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Proof not found' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(updated),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: error.message || 'Internal Server Error' }),
    };
  }
};
