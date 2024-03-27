import express, { Router } from "express";

import { createItem, deleteItem, getWholeList } from "./controller";

const indexRouter: Router = express.Router();

//* Todo List
indexRouter.get("/whole-list", getWholeList);

indexRouter.delete("/delete/:id", deleteItem);

indexRouter.post("/add-item", createItem);

export default indexRouter;
