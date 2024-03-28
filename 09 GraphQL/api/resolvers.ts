import Database from "better-sqlite3";

import { Shark } from "./controller";

//* The DB
const filePathDB = "./db/fish.sqlite3";
const db = new Database(filePathDB, { verbose: console.log });
// console.log("db:", db);

const getSharks = (): Shark[] => {
  try {
    const stmt = db.prepare("SELECT * FROM sharks;");
    const sharks = stmt.all() as Shark[];
    // console.log("sharks:", sharks);
    return sharks;
  } catch (error) {
    console.log("error:", error);
  }
  return null as any;
};

const resolvers = {
  Query: {
    sharks() {
      return getSharks();
    },
  },
};

export default resolvers;
