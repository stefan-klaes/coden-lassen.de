import { SignJWT } from 'jose';

// JWT generation is disabled because 'jsonwebtoken' depends on Node.js core modules
// which are not available in edge/serverless/browser environments (e.g., Vercel Edge).
// If you need JWTs, use a compatible library or move this logic to a Node.js API route.

export async function createBearerToken({
  email,
  projectId,
}: {
  email: string;
  projectId: number;
}) {
  if (!email || !projectId) {
    return null;
  }
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  return await new SignJWT({ email, projectId })
    .setProtectedHeader({ alg: 'HS256' })
    .sign(secret);
}
