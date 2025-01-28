import path from "path";
import http from "http";
import fs from "fs";

import * as dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

//* GraphQL
import gql from "graphql-tag";
import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

// Import routes
import indexRouter from "./indexRouter";

//* Import resolvers
import resolvers from "./resolvers";

//* The server
const app: Express = express();

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "DELETE", "PUT"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: false,
};

//* Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
  })
);
// Compress all responses
app.use(compression({ level: 6 }));

//Route middleware
app.use("/api", indexRouter);

//* Favicon
app.get("/favicon.ico", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/favicon.svg"));
});
//* Test route
// app.get("/", (req: Request, res: Response) => {
//   console.log("req.ip:", req.ip);
//   res.send("<h1 style='color:blue;text-align:center'>API is running</h1>");
// });

//* Port
const httpPort = (process.env.PORT || 4000) as number;

//* Apollo Server
(async function () {
  //* TypeDefs
  const typeDefs = gql(fs.readFileSync("./schema.graphql", { encoding: "utf-8" }));
  // console.log("typeDefs:", typeDefs);
  // console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

  const apolloServer: ApolloServer<BaseContext> = await new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
    // introspection: process.env.NODE_ENV !== "production", // Disable in production mode!
    introspection: process.env.NODE_ENV === "development" ? true : false, // Disable in production mode!
    plugins: [
      process.env.NODE_ENV !== "development"
        ? ApolloServerPluginLandingPageDisabled() // Disable landing page in production
        : ApolloServerPluginLandingPageLocalDefault(), // Use local landing page in development
    ],
  });

  await apolloServer.start();
  await app.use("/graphql", expressMiddleware(apolloServer, {}));

  const httpServer = http.createServer(app);
  httpServer.listen({ port: httpPort }, () => {
    console.log(`Server is listening at http://localhost:${httpPort}`);
    console.log(`GraphQL endpoint: http://localhost:${httpPort}/graphql`);
    // For testing only
    console.log("Current Time:", new Date().toLocaleTimeString());
  });
})();
