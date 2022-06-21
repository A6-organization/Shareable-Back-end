import { ApolloServer } from "apollo-server-express";
import Resolvers from "./graphql/resolver/index";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import type { IExecutableSchemaDefinition } from "@graphql-tools/schema";
import env from "./config/env";
import GraphQlDefinition, { ResponseErrorFormat } from "./graphql/index";
import routers from "./routers";

const currentPort = env.port || env.portLocal;
const app = express();
const httpServer = http.createServer(app);
app.use(routers);

async function startApolloServer(
  schema: IExecutableSchemaDefinition["typeDefs"],
  resolvers: IExecutableSchemaDefinition["resolvers"]
) {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    allowBatchedHttpRequests: true,
    formatError: ResponseErrorFormat,
    csrfPrevention: false,
  });

  await server.start();
  server.applyMiddleware({ app, cors: true });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: currentPort }, resolve)
  );

  console.log(
    `Server are running at http://localhost:${currentPort}${server.graphqlPath}`
  );
}

startApolloServer(GraphQlDefinition, Resolvers);
