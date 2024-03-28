//* Used: https://www.npmjs.com/package/sqlite3

import fs from "fs";
import sqlite3 from "sqlite3";

const filePathDB = "../db/fish.sqlite3";

const createDbConnection = (): sqlite3.Database => {
  if (fs.existsSync(filePathDB)) {
    return new sqlite3.Database(filePathDB);
  } else {
    const db = new sqlite3.Database(filePathDB, (error) => {
      if (error) {
        return console.error(error.message);
      }
      createTable(db);
    });
    // console.log("db:", db);
    console.log("Connection with SQLite has been established");
    return db;
  }
};

createDbConnection();

function createTable(db: sqlite3.Database) {
  db.exec(`
  CREATE TABLE sharks
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name   VARCHAR(50) NOT NULL,
    color   VARCHAR(50) NOT NULL,
    weight INTEGER NOT NULL
  );
`);
}

export default createDbConnection;
