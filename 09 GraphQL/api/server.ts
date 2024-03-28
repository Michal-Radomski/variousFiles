import path from "path";
import http from "http";

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
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import resolvers from "./resolvers";
import { readFileSync } from "fs";

// Import routes
import indexRouter from "./indexRouter";

//* The server
const app: Express = express();

const corsOptions = {
  origin: true,
  methods: ["GET", "POST", "DELETE"],
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
  const typeDefs = gql(readFileSync("./schema.graphql", { encoding: "utf-8" }));
  // console.log("typeDefs:", typeDefs);

  const apolloServer = await new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer, {}));

  const httpServer = http.createServer(app);
  httpServer.listen({ port: httpPort }, () => {
    console.log(`Server is listening at http://localhost:${httpPort}`);
    console.log(`GraphQL endpoint: http://localhost:${httpPort}/graphql`);
    // For testing only
    console.log("Current Time:", new Date().toLocaleTimeString());
  });
})();
