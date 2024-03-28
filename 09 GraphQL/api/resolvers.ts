import { db } from "./controller";
console.log("db:", db);

const getSharks = async () => {
  await db.all(`SELECT * FROM sharks;`, (error, rows) => {
    if (error) {
      throw new Error(error.message);
    }
    // console.log("rows:", rows);
    return rows;
  });
};

const resolvers = {
  Query: {
    sharks() {
      return getSharks();
    },
  },
};

export default resolvers;
