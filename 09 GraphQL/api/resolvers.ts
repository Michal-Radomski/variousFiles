import { Shark, db } from "./controller";
// console.log("db:", db);

const getSharks = async (): Promise<Shark[]> => {
  let sharksArray = [] as Shark[];

  try {
    await db.all(`SELECT * FROM sharks;`, (error, rows: Shark[]) => {
      // if (error) {
      //   throw new Error(error.message);
      // }
      console.log("rows:", rows);

      // sharksArray.forEach((row) => sharksArray.push(row));
      sharksArray = [...rows];
    });
  } catch (error) {
    console.log("error:", error);
  }
  console.log("sharksArray:", sharksArray);
  return JSON.parse(JSON.stringify(sharksArray));
};

const resolvers = {
  Query: {
    async sharks(_: any, __: any, context: any) {
      return await getSharks();
    },
  },
};

export default resolvers;
