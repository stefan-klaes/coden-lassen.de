import { SignJWT } from "jose";

export async function createBearerToken({
  email,
  projectId,
}: {
  email: string;
  projectId: number;
}) {
  if (!email) {
    return null;
  }
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
  return await new SignJWT({ email, projectId: projectId || 0 })
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
}
