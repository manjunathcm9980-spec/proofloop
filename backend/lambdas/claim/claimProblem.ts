/**
 * AWS Lambda Handler: Claim Problem
 * API Gateway Event: POST /api/problems/{id}/claim
 * 
 * AWS Services Used:
 * - AWS Lambda
 * - AWS DynamoDB (UpdateCommand with conditional expression attribute_exists(PK) AND status = 'open')
 */

import { db } from '../../db/dynamoTable';

export const handler = async (event: any) => {
  try {
    const problemId = event.pathParameters?.id || event.id;
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

    if (!problemId || !body.builderId || !body.builderName) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Missing problemId, builderId, or builderName' }),
      };
    }

    const updated = db.updateProblemStatus(problemId, 'claimed', {
      id: body.builderId,
      name: body.builderName,
    });

    if (!updated) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Problem not found' }),
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
