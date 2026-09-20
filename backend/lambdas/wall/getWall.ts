/**
 * AWS Lambda Handler: Get Public Proof Wall Feed
 * API Gateway Event: GET /api/wall
 * 
 * AWS Services Used:
 * - AWS Lambda
 * - AWS DynamoDB (Query GSI1 for PROOF_STATUS#validated returning all problem + solution cards)
 */

import { db } from '../../db/dynamoTable';

export const handler = async () => {
  try {
    const wallItems = db.getProofWallItems();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(wallItems),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: error.message || 'Internal Server Error' }),
    };
  }
};
