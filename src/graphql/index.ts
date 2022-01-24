import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { AuthChecker, Authorized, buildSchema } from "type-graphql";
import { getSession } from "next-auth/react";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { IncomingMessage, ServerResponse } from "http";
import { prisma } from "./prisma";
import {
  applyResolversEnhanceMap,
  PostCrudResolver,
  PostRelationsResolver,
} from "src/__generated__/type-graphql";

const findValue = (obj: object, d: string): unknown =>
  Object.values(obj).find((v) =>
    typeof v === "object" && !Array.isArray(v) && v !== null
      ? findValue(v, d)
      : v === d
  );

const authChecker: AuthChecker<{
  prisma: typeof prisma;
  req: IncomingMessage;
  res: ServerResponse;
}> = async ({ args, info, context: { req } }, roles) => {
  if (roles.includes(info.fieldName)) return true;
  const session = await getSession({ req });
  if (!session?.user) return false;
  const sessionEmail = session.user.email;
  const hasEmail = findValue(args, sessionEmail as string);
  return !!hasEmail;
};

applyResolversEnhanceMap({
  Post: {
    _all: [Authorized("post", "posts")],
  },
});

const handler = async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }
  const schema = await buildSchema({
    resolvers: [PostRelationsResolver, PostCrudResolver],
    authChecker: authChecker,
    emitSchemaFile: true,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res, prisma }),
  });
  await apolloServer.start();
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};
export default handler;
