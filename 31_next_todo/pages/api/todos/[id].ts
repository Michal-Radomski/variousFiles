import type { NextApiRequest, NextApiResponse } from "next";

import connect from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { TodoI } from "@/Interfaces";

export default async function handler(req: NextApiRequest, res: NextApiResponse<TodoI>): Promise<void> {
  await connect();

  const { id } = req.query as { id: string };

  try {
    if (req.method === "GET") {
      const currentTodo = (await Todo.findById(id)) as TodoI;
      // console.log({ currentTodo });
      return res.status(200).json(currentTodo as TodoI);
    } else if (req.method === "PUT") {
      const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
      // console.log({ updatedTodo });
      return res.status(200).json(updatedTodo as TodoI);
    } else if (req.method === "DELETE") {
      const deletionRes = await Todo.findByIdAndDelete(id);
      // console.log({ deletionRes: deletionRes });
      return res.status(200).json(deletionRes);
    }
  } catch (error) {
    console.log("error:", error);
  }
}
