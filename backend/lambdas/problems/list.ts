/**
 * AWS Lambda Handler: List Problems
 * API Gateway Event: GET /api/problems?category=...&status=...&search=...
 * 
 * AWS Services Used:
 * - AWS Lambda
 * - AWS DynamoDB (QueryCommand via GSI1 index on status or scan filter)
 */

import { db } from '../../db/dynamoTable';

export const handler = async (event: any) => {
  try {
    const query = event.queryStringParameters || {};
    const category = query.category;
    const status = query.status;
    const search = query.search;

    const problems = db.getProblems({ category, status, search });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(problems),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: error.message || 'Internal Server Error' }),
    };
  }
};
