/**
 * AWS Lambda Handler: Generate S3 Pre-Signed Upload URL
 * API Gateway Event: POST /api/storage/upload-url
 * 
 * AWS Services Used:
 * - AWS S3 (@aws-sdk/s3-request-presigner getSignedUrl PutObjectCommand)
 * Allows client browser to directly upload images/proof assets securely to AWS S3 without passing bytes through Lambda.
 */

export const handler = async (event: any) => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const filename = body.filename || `upload_${Date.now()}.jpg`;
    const contentType = body.contentType || 'image/jpeg';

    // Simulated S3 pre-signed URL generator for local dev & demo
    // In production AWS:
    // const command = new PutObjectCommand({ Bucket: S3_BUCKET_NAME, Key: filename, ContentType: contentType });
    // const uploadUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });

    const key = `uploads/${Date.now()}_${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const uploadUrl = `/api/storage/mock-upload?key=${key}`;
    const publicUrl = `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80`;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        uploadUrl,
        publicUrl,
        key,
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
