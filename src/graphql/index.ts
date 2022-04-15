import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { prisma } from "./prisma";
import { schema } from "./schema";

const handler = async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

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
