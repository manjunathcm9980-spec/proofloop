/**
 * ProofLoop Local Backend Server
 * 
 * Invokes native AWS Lambda handlers locally to emulate AWS API Gateway + DynamoDB + S3 + Cognito
 */

import express from 'express';
import cors from 'cors';

// Import AWS Lambda handlers
import { handler as createProblemHandler } from './lambdas/problems/create';
import { handler as listProblemsHandler } from './lambdas/problems/list';
import { handler as getProblemHandler } from './lambdas/problems/get';
import { handler as claimProblemHandler } from './lambdas/claim/claimProblem';
import { handler as addBuildLogHandler } from './lambdas/logs/addBuildLog';
import { handler as submitProofHandler } from './lambdas/proof/submitProof';
import { handler as validateProofHandler } from './lambdas/proof/validateProof';
import { handler as getWallHandler } from './lambdas/wall/getWall';
import { handler as getUploadUrlHandler } from './lambdas/storage/getUploadUrl';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Helper to adapt Express req/res to AWS Lambda Event / Result
const lambdaAdapter = (lambdaFn: Function) => async (req: express.Request, res: express.Response) => {
  try {
    const event = {
      body: req.body,
      queryStringParameters: req.query,
      pathParameters: req.params,
      id: req.params.id,
      headers: req.headers,
    };
    const result = await lambdaFn(event);
    const body = typeof result.body === 'string' ? JSON.parse(result.body) : result.body;
    res.status(result.statusCode || 200).json(body);
  } catch (err: any) {
    res.status(500).json({ message: err.message || 'Internal Server Error' });
  }
};

// API Gateway Lambda Routes
app.get('/api/problems', lambdaAdapter(listProblemsHandler));
app.post('/api/problems', lambdaAdapter(createProblemHandler));
app.get('/api/problems/:id', lambdaAdapter(getProblemHandler));
app.post('/api/problems/:id/claim', lambdaAdapter(claimProblemHandler));
app.post('/api/problems/:id/logs', lambdaAdapter(addBuildLogHandler));
app.post('/api/problems/:id/proof', lambdaAdapter(submitProofHandler));
app.post('/api/proofs/:id/validate', lambdaAdapter(validateProofHandler));
app.get('/api/wall', lambdaAdapter(getWallHandler));
app.post('/api/storage/upload-url', lambdaAdapter(getUploadUrlHandler));

// Mock upload endpoint
app.put('/api/storage/mock-upload', (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully' });
});

app.listen(PORT, () => {
  console.log(`⚡ ProofLoop AWS API Gateway Local Server running at http://localhost:${PORT}`);
});
