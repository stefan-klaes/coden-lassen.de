import { SignJWT } from "jose";

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
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
}
