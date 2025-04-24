import jwt from "jsonwebtoken";

export function createBearerToken({
  email,
  projectId,
}: {
  email: string;
  projectId: number;
}) {
  return jwt.sign({ email, projectId }, process.env.AUTH_SECRET!);
}
