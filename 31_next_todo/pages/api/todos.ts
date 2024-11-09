// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connect from "@/lib/mongodb";
import Todo, { TodoI } from "@/models/Todo";

export default async function handler(req: NextApiRequest, res: NextApiResponse<TodoI[] | TodoI>) {
  await connect();

  try {
    if (req.method === "GET") {
      const todos: TodoI[] = await Todo.find({}).sort({ createdAt: -1 });
      res.status(200).json(todos);
    } else if (req.method === "POST") {
      const newTodo: TodoI = new Todo(req.body);
      await newTodo.save();
      res.status(201).json(newTodo);
    }
  } catch (error) {
    console.log("error:", error);
  }
}
