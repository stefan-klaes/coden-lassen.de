import NextAuth, { User } from "next-auth";
import GitHub from "next-auth/providers/github";
import { getOrCreateProject } from "./get-or-create-project";

declare module "next-auth" {
  interface Session {
    user: User & {
      project: { id: number; name: string; balance: number } | null;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub({
    authorization: { params: { prompt: "login" } }
  })],
  callbacks: {
    async session({ session }) {
      if (session?.user?.email) {
        const validEmail = session.user.email.toLowerCase().trim() as string;
        const project = await getOrCreateProject({ email: validEmail });
        console.log({ getorCreate: project });
        session.user.project = project;
      }
      return session;
    },
  },
});
