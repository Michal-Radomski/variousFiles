In SQLite, the methods `run`, `prepare`, `get`, and `all` serve different purposes when interacting with the database. Here's
a breakdown of each:

## 1. **run**

- **Purpose**: Executes a SQL statement that modifies the database (e.g., `INSERT`, `UPDATE`, `DELETE`).
- **Returns**: An object summarizing the result, including the number of affected rows and the last inserted row ID.
- **Usage Example**:
  ```javascript
  await db.run("INSERT INTO table_name (column1, column2) VALUES (?, ?)", [value1, value2]);
  ```

## 2. **prepare**

- **Purpose**: Compiles a SQL statement into a prepared statement. This is useful for executing the same statement multiple
  times with different parameters, as it improves performance by caching the execution plan.
- **Returns**: A prepared statement object that can be executed multiple times.
- **Usage Example**:
  ```javascript
  const stmt = db.prepare("SELECT * FROM table_name WHERE id = ?");
  ```

## 3. **get**

- **Purpose**: Executes a SQL query that returns a single row from the database.
- **Returns**: The first row of the result set as an object, or `undefined` if no rows match.
- **Usage Example**:
  ```javascript
  const row = await db.get("SELECT * FROM table_name WHERE id = ?", [someId]);
  ```

## 4. **all**

- **Purpose**: Executes a SQL query that returns multiple rows from the database.
- **Returns**: An array of objects representing all rows in the result set. If no rows match, it returns an empty array.
- **Usage Example**:
  ```javascript
  const rows = await db.all("SELECT * FROM table_name");
  ```

## Summary of Differences

| Method    | Purpose                                        | Returns                                 |
| --------- | ---------------------------------------------- | --------------------------------------- |
| `run`     | Execute statements that modify data            | Summary object (affected rows, last ID) |
| `prepare` | Compile a SQL statement for repeated execution | Prepared statement object               |
| `get`     | Retrieve a single row                          | Single row object or `undefined`        |
| `all`     | Retrieve multiple rows                         | Array of row objects                    |

### Conclusion

Using these methods appropriately allows you to efficiently manage your SQLite database operations in JavaScript. Prepared
statements (`prepare`) are particularly useful for performance when executing queries multiple times with different
parameters.

Citations: [1] https://sqlite.org/forum/info/d2ed7df1ba8ef333 [2] https://forum.xojo.com/t/sqlite-prepared-statements/15510
[3] https://stackoverflow.com/questions/1703203/in-sqlite-do-prepared-statements-really-improve-performance/1861884 [4]
https://github.com/WiseLibs/better-sqlite3/issues/262 [5] https://nodejs.org/api/sqlite.html [6]
https://www.powersync.com/blog/sqlite-optimizations-for-ultra-high-performance [7] https://www.sqlite.org/faq.html [8]
https://docs.python.org/zh-tw/3/library/sqlite3.html
