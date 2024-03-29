//* Used: https://www.npmjs.com/package/sqlite3

import db from "./db";

function insertRow(): void {
  const [name, color, weight] = process.argv.slice(2);

  db().run(`INSERT INTO sharks (name, color, weight) VALUES (?, ?, ?)`, [name, color, weight], function (error) {
    if (error) {
      console.error(error.message);
    }
    console.log(`Inserted a row with the ID: ${this.lastID}`);
  });
}

insertRow();
