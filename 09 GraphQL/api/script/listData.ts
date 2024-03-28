//* Used: https://www.npmjs.com/package/sqlite3

import db from "./db";

(function selectRows(): void {
  db().each(`SELECT * FROM sharks`, (error, row) => {
    if (error) {
      throw new Error(error.message);
    }
    console.log(row);
  });
})();
