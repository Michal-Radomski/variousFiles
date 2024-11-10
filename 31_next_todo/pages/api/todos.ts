// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connect from "@/lib/mongodb";
import Todo from "@/models/Todo";
import { TodoI } from "@/Interfaces";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await connect();

  try {
    if (req.method === "GET") {
      const todos: TodoI[] = await Todo.find({}).sort({ createdAt: -1 });
      // console.log("todos:", todos);
      return res.status(200).json(todos);
    } else if (req.method === "POST") {
      const newTodo: TodoI = new Todo(req.body);
      // console.log("newTodo:", newTodo);
      await newTodo.save();
      return res.status(201).json(newTodo);
    }
  } catch (error) {
    console.log("error:", error);
  }
}
