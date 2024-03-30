//* Used: https://www.npmjs.com/package/better-sqlite3

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
    sharks: async () => {
      return await getSharks();
    },
  },

  Mutation: {
    deleteShark: async (_parent: any, { ID }: { ID: string }): Promise<Shark | undefined> => {
      try {
        const stmtFind = await db.prepare("SELECT * FROM sharks WHERE ID = ?;");
        const sharkToDel = (await stmtFind.get(ID)) as Shark;
        // console.log("sharkToDel:", sharkToDel);
        const stmtDel = await db.prepare("DELETE FROM sharks WHERE ID = ?;");
        const res = await stmtDel.run(ID);
        // console.log("res:", res);
        return sharkToDel;
      } catch (error) {
        console.log("error:", error);
      }
    },

    addShark: async (
      _parent: any,
      { name, color, weight }: { name: string; color: string; weight: string }
    ): Promise<Shark | undefined> => {
      try {
        const stmtAdd = await db.prepare("INSERT INTO sharks (name, color, weight) VALUES (?, ?, ?);");
        const resId = await stmtAdd.run(name, color, weight)?.lastInsertRowid;
        // console.log("resId:", resId);
        const stmtFind = await db.prepare("SELECT * FROM sharks WHERE ID = ?;");
        const sharkToReturn = (await stmtFind.get(resId)) as Shark;
        // console.log("sharkToReturn:", sharkToReturn);
        return sharkToReturn;
      } catch (error) {
        console.log("error:", error);
      }
    },

    updateShark: async (
      _parent: any,
      { ID, name, color, weight }: { ID: string; name: string; color: string; weight: number }
    ): Promise<Shark | undefined> => {
      try {
        const stmtFind = await db.prepare("SELECT * FROM sharks WHERE ID = ?;");
        const sharkToUpdate = (await stmtFind.get(ID)) as Shark;
        const stmtUpdate = await db.prepare("UPDATE sharks SET name = ?, color = ?, weight = ? WHERE ID = ?;");
        await stmtUpdate.run(name, color, weight, ID);
        return { ...sharkToUpdate, name, color, weight }; //* One of possibilities
      } catch (error) {
        console.log("error:", error);
      }
    },
  },
};

export default resolvers;
