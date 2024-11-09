import mongoose from "mongoose";

const connect = async (): Promise<void> => {
  const mongoUrl = process.env.MONG0_URL as string;
  console.log({ mongoUrl });

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose
    .connect(mongoUrl)
    .then((con: { connection: { host: string } }) => {
      console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    })
    .catch((error: string) => console.log("Mongo DB Error => ", error));
};

export default connect;
