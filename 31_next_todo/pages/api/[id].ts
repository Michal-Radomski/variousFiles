import type { NextApiRequest, NextApiResponse } from "next";

import connect from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { TodoI } from "@/Interfaces";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoI | { message: string }>
): Promise<void> {
  await connect();

  const { id } = req.query as { id: string };

  if (req.method === "PUT") {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    console.log({ updatedTodo });
    return res.status(200).json(updatedTodo as TodoI);
  } else if (req.method === "DELETE") {
    await Todo.findByIdAndDelete(id);
    return res.status(204).json({ message: "Done!" });
  }
}
