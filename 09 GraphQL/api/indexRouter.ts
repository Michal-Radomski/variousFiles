import express, { Router } from "express";

import { getWholeList } from "./controller";

const indexRouter: Router = express.Router();

//* Todo List
indexRouter.get("/whole-list", getWholeList);

export default indexRouter;
