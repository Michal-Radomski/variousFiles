import { Shark, db } from "./controller";
// console.log("db:", db);

const getSharks = async () => {
  let sharksArray = [] as Shark[];

  await db.all(`SELECT * FROM sharks;`, (error, rows: Shark[]) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log("rows:", rows);
    // rows.forEach(function (elem: Shark) {
    //   sharksArray.push(elem);
    // });
    for (let i = 0; i < rows.length; i++) {
      sharksArray.push(rows[i]);
    }
  });
  console.log("sharksArray:", sharksArray);

  return sharksArray;
};

const resolvers = {
  Query: {
    async sharks(_: any, __: any, context: any) {
      return await getSharks();
    },
  },
};

export default resolvers;
