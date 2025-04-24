//import jwt from "jsonwebtoken";

export function createBearerToken({
  email,
  projectId,
}: {
  email: string;
  projectId: number;
}) {
  if (!email || !projectId) {
    return null;
  }
  return null;
  //return jwt.sign({ email, projectId }, process.env.AUTH_SECRET!);
}
