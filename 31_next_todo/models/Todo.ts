import mongoose, { Schema, Document } from "mongoose";

export interface TodoI extends Document {
  item: string;
  completed: boolean;
  createdAt: Date;
}

const TodoSchema: Schema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

export default mongoose.model<TodoI>("Todo", TodoSchema);
