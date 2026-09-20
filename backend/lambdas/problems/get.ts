/**
 * AWS Lambda Handler: Get Problem Details by ID
 * API Gateway Event: GET /api/problems/{id}
 * 
 * AWS Services Used:
 * - AWS Lambda
 * - AWS DynamoDB (QueryCommand for PK=PROBLEM#<id> retrieving metadata, logs, and proof in a single query)
 */

import { db } from '../../db/dynamoTable';

export const handler = async (event: any) => {
  try {
    const problemId = event.pathParameters?.id || event.id;

    if (!problemId) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Problem ID parameter is required' }),
      };
    }

    const problem = db.getProblemById(problemId);
    if (!problem) {
      return {
        statusCode: 404,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Problem not found' }),
      };
    }

    const logs = db.getBuildLogsByProblemId(problemId);
    const proof = db.getProofByProblemId(problemId);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        problem,
        logs,
        proof: proof || null,
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: error.message || 'Internal Server Error' }),
    };
  }
};
