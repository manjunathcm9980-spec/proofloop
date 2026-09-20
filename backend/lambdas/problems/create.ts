/**
 * AWS Lambda Handler: Create Problem
 * API Gateway Event: POST /api/problems
 * 
 * AWS Services Used:
 * - AWS Lambda (Node.js runtime)
 * - AWS DynamoDB (PutItem / PutCommand into ProofLoopData table)
 * - Amazon Cognito (Authorization via JWT Claims event.requestContext.authorizer)
 */

import { db } from '../../db/dynamoTable';
import { Problem, ProblemCategory, ProblemUrgency } from '../../../src/types';

export interface CreateProblemPayload {
  title: string;
  description: string;
  category: ProblemCategory;
  urgency: ProblemUrgency;
  whoAffected: string;
  skillsNeeded: string[];
  posterId: string;
  posterName: string;
  imageUrl?: string;
}

export const handler = async (event: any) => {
  try {
    const body: CreateProblemPayload = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;

    if (!body.title || !body.description || !body.category || !body.posterId) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Missing required fields: title, description, category, and posterId' }),
      };
    }

    const newProblem: Problem = {
      id: `prob_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      title: body.title,
      description: body.description,
      category: body.category || 'Other',
      urgency: body.urgency || 'Medium',
      whoAffected: body.whoAffected || 'Local Community',
      skillsNeeded: body.skillsNeeded || [],
      posterId: body.posterId,
      posterName: body.posterName || 'Problem Poster',
      status: 'open',
      imageUrl: body.imageUrl || undefined,
      createdAt: new Date().toISOString(),
    };

    const created = db.createProblem(newProblem);

    return {
      statusCode: 201,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(created),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: error.message || 'Internal Server Error' }),
    };
  }
};
