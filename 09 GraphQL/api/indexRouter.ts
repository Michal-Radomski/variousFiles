import express, { Router } from "express";

import { deleteItem, getWholeList } from "./controller";

const indexRouter: Router = express.Router();

//* Todo List
indexRouter.get("/whole-list", getWholeList);

indexRouter.delete("/delete/:id", deleteItem);

export default indexRouter;
