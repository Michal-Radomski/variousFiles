import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface TodoI extends Document {
  _id: string | ObjectId;
  item: string;
  completed?: boolean;
  createdAt?: Date;
}
