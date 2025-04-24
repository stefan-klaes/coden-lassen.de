import { API_URL } from "@/config/config";
import { createBearerToken } from "./create-bearer-token";

export async function getOrCreateProject({ email }: { email: string }) {
  const bearerToken = await createBearerToken({
    email,
    projectId: 0,
  });
  const res = await fetch(`${API_URL}/iam/project/sign-in/get-or-create`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });

  if (!res.ok) {
    console.error("Error fetching project:", res.status, res.statusText);
    console.log(res);
    return null;
  }

  const data = await res.json();

  if (!data?.name || !data?.id || !data?.balance) {
    console.error("Invalid project data:", data);
    return null;
  }
  return {
    id: data.id,
    name: data.name,
    balance: data.balance,
  };
}
