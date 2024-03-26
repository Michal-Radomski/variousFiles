import { Request, RequestHandler, Response } from "express";
import sqlite3 from "sqlite3";

//* The DB
const filePathDB = "./db/fish.sqlite3";
const db: sqlite3.Database = new sqlite3.Database(filePathDB);

// Get All List
export const getWholeList: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  console.log("req.ip:", req.ip);
  try {
    db.all(`SELECT * FROM sharks`, (error, rows) => {
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
