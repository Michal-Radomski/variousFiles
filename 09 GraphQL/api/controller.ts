import { Request, RequestHandler, Response } from "express";
import sqlite3 from "sqlite3";

//* The DB
const filePathDB = "./db/fish.sqlite3";
const db: sqlite3.Database = new sqlite3.Database(filePathDB);
// console.log("db:", db);

// Get All List
export const getWholeList: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  console.log("req.ip:", req.ip);
  try {
    await db.all(`SELECT * FROM sharks;`, (error, rows) => {
      if (error) {
        throw new Error(error.message);
      }
      // console.log("rows:", rows);
      res.status(200).json({ list: rows });
    });
  } catch (error) {
    console.error({ error });
    res.status(500).send("Server error");
  }
};

// Delete an Item
export const deleteItem: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  // console.log("req.ip:", req.ip);
  try {
    const { id } = req.params;
    // console.log({ id });
    await db.run("DELETE FROM sharks WHERE ID = $1 RETURNING *;", [id], function (error) {
      if (error) {
        console.error(error.message);
      }
    });
    res.status(200).json({ message: "Delete ok" });
  } catch (error) {
    console.error({ error });
    res.status(500).send("Server error");
  }
};

// Create a todo
export const createItem: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    // console.log("req.body:", req.body);
    const { name, color, weight } = req.body;

    await db.run(`INSERT INTO sharks (name, color, weight) VALUES (?, ?, ?)`, [name, color, weight], function (error) {
      if (error) {
        console.error(error.message);
      }
      // console.log(`Inserted a row with the ID: ${this.lastID}`);
      res.status(200).json({ message: `Inserted a row with the ID: ${this.lastID}` });
    });
  } catch (error) {
    console.error({ error });
  }
};
