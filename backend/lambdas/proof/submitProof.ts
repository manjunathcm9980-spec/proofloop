/**
 * AWS Lambda Handler: Submit Proof of Solution
 * API Gateway Event: POST /api/problems/{id}/proof
 * 
 * AWS Services Used:
 * - AWS Lambda
 * - AWS DynamoDB (PutCommand into ProofLoopData with SK="PROOF#<id>")
 * - AWS EventBridge / SNS (Publishes 'ProofSubmitted' event to notify Problem Poster via Email/SMS)
 */

import { db } from '../../db/dynamoTable';
import { Proof } from '../../../src/types';

export const handler = async (event: any) => {
  try {
    const problemId = event.pathParameters?.id || event.id;
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

    if (!problemId || !body.builderId || !body.summary || !body.demoUrl) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Missing problemId, builderId, summary, or demoUrl' }),
      };
    }

    const newProof: Proof = {
      id: `prf_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      problemId,
      builderId: body.builderId,
      builderName: body.builderName || 'Student Builder',
      summary: body.summary,
      demoUrl: body.demoUrl,
      imageUrl: body.imageUrl || undefined,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    const saved = db.submitProof(newProof);

    // [AWS EventBridge Stretch Note]:
    // In production on AWS, an EventBridge detail event is published here:
    // const eventBridge = new EventBridgeClient({ region });
    // await eventBridge.send(new PutEventsCommand({
    //   Entries: [{
    //     Source: 'proofloop.proofs',
    //     DetailType: 'ProofSubmitted',
    //     Detail: JSON.stringify({ problemId, proofId: saved.id, posterId: problem.posterId })
    //   }]
    // }));

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
