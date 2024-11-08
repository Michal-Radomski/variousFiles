import protobuf from "protobufjs";

// Load the protobuf definition
const loadProtobuf = async (): Promise<protobuf.Type> => {
  const root = await protobuf.load("./src/user.proto");
  return root.lookupType("User");
};

const encodeData = async (): Promise<Uint8Array> => {
  const userData = { name: "Alice", age: 30 };
  console.log("userData:", userData);

  const User = await loadProtobuf();
  // console.log("User:", User);

  // Encode user data to protobuf format
  const errMsg = User.verify(userData) as string | null;
  if (errMsg) throw Error(errMsg);

  const message: protobuf.Message<{}> = User.create(userData);
  const buffer: Uint8Array = User.encode(message).finish(); // Encode to Uint8Array
  // console.log("buffer:", buffer);
  return buffer;
};

(async function decodeData(): Promise<void> {
  try {
    const encodedData: Uint8Array = await encodeData();
    console.log("encodedData:", encodedData);

    const User: protobuf.Type = await loadProtobuf();
    // console.log("User:", User);

    const user = User.decode(encodedData); // Decode the incoming protobuf data
    console.log("user:", user);
  } catch (error) {
    console.error("Error decoding protobuf:", error);
  }
})();
